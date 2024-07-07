"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "../db";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/");
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

export async function checkIfPostIsLikedByUser(postId: string) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  const likes = await postLikes(postId);

  const isLiked = likes.find((like) => like.userId === userId);

  if (isLiked) return true;
  return false;
}

export async function unlikePost(postId: string) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }
  try {
    const likeId = await getLikeId(postId);

    if (likeId) {
      await db.like.delete({
        where: { id: likeId },
      });
    }
  } catch (error) {
    console.log("Error unliking this post: ", error);
    return { error: `Error unliking this post ${error}` };
  }
  revalidatePath("/");
  return {
    success: "Post unliked successfully!",
  };
}

export async function getLikeId(postId: string) {
  const { userId } = auth();
  if (userId == null) {
    console.log("Please sign in first!");
    redirect("/auth/sign-in");
  }

  const likes = await postLikes(postId);
  const like = likes.find(
    (like) => like.userId === userId && like.postId === postId
  );

  if (like) return like.id;

  return;
}
