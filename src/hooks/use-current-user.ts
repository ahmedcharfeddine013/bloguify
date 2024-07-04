import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export async function useCurrentUser() {
  const user = useUser();
  return user;
}
