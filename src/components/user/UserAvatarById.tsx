import Image from "next/image";
import React from "react";
import { AvatarFallback } from "../ui/avatar";
import { getUserByClerkId } from "@/lib/actions/user";

const UserAvatarById = async ({ userId }: { userId: string }) => {
  const user = await getUserByClerkId(userId);

  if (user == null) return <p>None</p>;

  return (
    <div className="rounded-full overflow-hidden">
      {user.imageUrl ? (
        <Image src={user.imageUrl} alt="user" height={24} width={24} />
      ) : (
        <AvatarFallback>AC</AvatarFallback>
      )}
    </div>
  );
};

export default UserAvatarById;
