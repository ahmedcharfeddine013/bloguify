import { getUserByClerkId } from "@/lib/actions/user";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const PostAuthor = async ({ clerkId }: { clerkId: string }) => {
  const user = await getUserByClerkId(clerkId);
  if (user == null) return <p>No User Found</p>;
  return (
    <div className="flex items-center justify-start gap-3">
      <div className="rounded-full overflow-hidden">
        {user.imageUrl ? (
          <Image src={user.imageUrl} alt="user" height={36} width={36} />
        ) : (
          <AvatarFallback>AC</AvatarFallback>
        )}
      </div>
      <p>{user.firstName + " " + user.lastName}</p>
    </div>
  );
};

export default PostAuthor;
