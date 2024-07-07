"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { checkIfPostIsLikedByUser, likePost } from "@/lib/actions/like";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

const LikePost = ({ postId }: { postId: string }) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    const checkLiked = async () => {
      const isLiked = await checkIfPostIsLikedByUser(postId);
      setIsLiked(isLiked);
    };

    checkLiked();
  }, [postId]);

  const onSubmit = async () => {
    startTransition(() => {
      likePost(postId).then((data) => {
        if (data.error) {
          console.log(data.error);
          toast({
            title: "Error",
            description: data.error,
          });
        } else {
          toast({
            title: "Success",
            description: data.success,
          });
        }
      });
    });
  };

  return (
    <Button className="w-full space-x-2" onClick={onSubmit}>
      <Heart size={20} />
      <p className={`hidden md:block ${isLiked ? "text-red-700" : ""} `}>
        Like
      </p>
    </Button>
  );
};

export default LikePost;
