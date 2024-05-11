"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return <div></div>;
}
