import db from "../db";

export async function getPostCommentsByPostId(postId: string) {
  const comments = await db.comment.findMany({ where: { postId } });
  return comments;
}
