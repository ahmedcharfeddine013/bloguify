import { getUserByClerkId } from "@/lib/actions/user";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { AvatarFallback } from "../ui/avatar";

const UserAvatar = async () => {
  const { userId } = auth();
  if (!userId) return <p>No User </p>;
  const user = await getUserByClerkId(userId);
  if (user == null) return <p>No User</p>;
  return (
    <div className="rounded-full overflow-hidden">
      {user.imageUrl ? (
        <Image src={user.imageUrl} alt="user" height={36} width={36} />
      ) : (
        <AvatarFallback>AC</AvatarFallback>
      )}
    </div>
  );
};

export default UserAvatar;
