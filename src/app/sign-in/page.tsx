"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card>
        <Button onClick={() => signIn("google")}>Sign In with Google</Button>
      </Card>
    </div>
  );
}
