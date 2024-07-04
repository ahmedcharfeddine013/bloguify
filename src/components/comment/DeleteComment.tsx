"use client";

import React, { useTransition } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { deleteComment } from "@/lib/actions/comment";

const DeleteComment = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteComment(id);
          router.refresh();
        });
      }}
      className="text-red-600"
    >
      Delete
    </DropdownMenuItem>
  );
};

export default DeleteComment;
