"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useToast } from "../ui/use-toast";
import {
  checkIfPostIsLikedByUser,
  likePost,
  unlikePost,
} from "@/lib/actions/like";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const LikePost = ({ postId }: { postId: string }) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likesNumber, setLikesNumber] = useState<number>();
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
      if (!isLiked) {
        likePost(postId).then((data) => {
          if (data.error) {
            console.log(data.error);
            toast({
              title: "Error",
              description: data.error,
            });
          } else {
            setIsLiked(true);
            toast({
              title: "Success",
              description: data.success,
            });
          }
        });
      } else {
        unlikePost(postId).then((data) => {
          if (data.error) {
            console.log(data.error);
            toast({
              title: "Error",
              description: data.error,
            });
          } else {
            setIsLiked(false);
            toast({
              title: "Success",
              description: data.success,
            });
          }
        });
      }
    });
  };

  return (
    <Button
      className=" bg-transparent hover:bg-transparent hover:scale-125 transition-all ease-in duration-100 "
      onClick={onSubmit}
      disabled={isPending}
    >
      {isLiked ? (
        <div
          className={
            "text-blue-500 w-full space-x-2 flex items-center justify-center gap-2"
          }
        >
          <ThumbsUp size={20} />
        </div>
      ) : (
        <div className="w-full space-x-2 flex items-center justify-center gap-2">
          <ThumbsUp size={20} />
        </div>
      )}
    </Button>
  );
};

export default LikePost;
