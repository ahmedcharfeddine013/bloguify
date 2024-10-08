import { Comment } from "@prisma/client";
import React from "react";
import UserAvatarById from "../user/UserAvatarById";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import DeleteComment from "./DeleteComment";

const PostComment = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex items-center justify-start gap-2 w-full">
      <UserAvatarById userId={comment.userId} />
      <div className="py-2 px-4 bg-white/10 rounded-xl w-full flex">
        <p className="text-sm font-semibold">{comment.content}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical />
          <span className="sr-only">Actions</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DeleteComment id={comment.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PostComment;
