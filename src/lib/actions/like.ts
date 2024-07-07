"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "../db";

export async function likePost(postId: string) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  try {
    await db.like.create({
      data: {
        userId,
        postId,
      },
    });
  } catch (error) {
    console.log("Error liking this post: ", error);
    return { error: `Error liking this post ${error}` };
  }
  return {
    success: "Post liked successfully!",
  };
}

export async function postLikes(postId: string) {
  const likes = await db.like.findMany({
    where: { postId },
  });
  return likes;
}
