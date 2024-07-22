"use server";

import db from "../db";

import * as z from "zod";
import { addReplySchema } from "../validators/reply";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getCommentRepliesByCommentId(commentId: string) {
  const replies = await db.commentReply.findMany({ where: { commentId } });
  return replies;
}

export async function addReply(
  commendId: string,
  values: z.infer<typeof addReplySchema>
) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  const validatedFields = addReplySchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields!",
    };
  }

  const data = validatedFields.data;

  try {
    await db.commentReply.create({
      data: {
        content: data.content,
        commentId: commendId,
        userId,
      },
    });
  } catch (error) {
    console.log("Error posting this reply: ", error);
    return {
      error: `Error posting this reply ${error}`,
    };
  }
  revalidatePath("/");

  return {
    success: "Reply published successfully!",
  };
}

export async function deleteReply(replyId: string) {
  const reply = await db.commentReply.delete({ where: { id: replyId } });
  return reply;
}
