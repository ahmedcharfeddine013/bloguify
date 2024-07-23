import { getPostCommentsByPostId } from "@/lib/actions/comment";
import React, { useEffect, useState } from "react";
import PostComment from "./PostComment";
import { Comment } from "@prisma/client";

const PostComments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    getPostCommentsByPostId(postId)
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [postId]);

  if (comments == null) return <p>No Comments Yet!</p>;
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      {comments.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComments;
