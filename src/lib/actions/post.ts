"use server";

import * as z from "zod";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { addPostSchema } from "../validators/post";
import db from "../db";

export async function addPost(values: z.infer<typeof addPostSchema>) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  console.log(userId);

  const validatedFields = addPostSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields:" };
  }

  const data = validatedFields.data;
  try {
    await db.post.create({
      data: {
        title: data.title,
        content: data.content,
        userId,
      },
    });
  } catch (error) {
    console.log("Error posting this post: ", error);
    return { error: `Error posting this post ${error}` };
  }
  return {
    success: "Post published successfully!",
  };
}

export async function getAllPost() {
  const posts = await db.post.findMany();
  return posts;
}

export async function getPostById(id: string) {
  const post = await db.post.findUnique({ where: { id } });
  return post;
}
