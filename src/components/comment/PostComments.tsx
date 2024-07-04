import { getPostCommentsByPostId } from "@/lib/actions/comment";
import React from "react";
import PostComment from "./PostComment";

const PostComments = async ({ postId }: { postId: string }) => {
  const comments = await getPostCommentsByPostId(postId);
  if (comments == null) return <p>No Comments Yet!</p>;
  if (comments.length == 0) return <p className="text-sm">No Comments Yet!</p>;
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      {comments.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComments;
