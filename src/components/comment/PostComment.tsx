import { Comment } from "@prisma/client";
import React from "react";
import UserAvatar from "../user/UserAvatar";
import UserAvatarById from "../user/UserAvatarById";

const PostComment = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <UserAvatarById userId={comment.userId} />
      <div className="py-2 px-4 bg-slate-600 rounded-xl">
        <p className="text-sm font-semibold">{comment.content}</p>
      </div>
    </div>
  );
};

export default PostComment;
