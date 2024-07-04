import db from "../db";

import * as z from "zod";
import { addCommentSchema } from "../validators/comment";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getPostCommentsByPostId(postId: string) {
  const comments = await db.comment.findMany({ where: { postId } });
  return comments;
}

export async function addComment(
  postId: string,
  values: z.infer<typeof addCommentSchema>
) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  console.log(userId);

  const validatedFields = addCommentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields:" };
  }
  const data = validatedFields.data;

  try {
    await db.comment.create({
      data: {
        content: data.content,
        postId,
        userId,
      },
    });
  } catch (error) {
    console.log("Error posting this post: ", error);
    return { error: `Error posting this post ${error}` };
  }
  return {
    success: "Comment published successfully!",
  };
}
