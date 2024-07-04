import { Post } from "@prisma/client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostAuthor from "./PostAuthor";
import { Heart } from "lucide-react";
import { Share } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import PostComments from "../comment/PostComments";
import CreateCommentForm from "../forms/comment/CreateCommentForm";
import UserAvatar from "../user/UserAvatar";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardHeader className="space-y-6">
        <PostAuthor clerkId={post.userId} />
        <CardTitle className="px-4">{post.title}</CardTitle>
      </CardHeader>
      <div className="flex  justify-center flex-col w-full px-4 space-y-6 ">
        <CardContent>{post.content}</CardContent>
        <div className="flex items-center justify-center  pt-1 bg-primary/50 mx-10 rounded-3xl"></div>
        <CardFooter className="flex items-start justify-start flex-col gap-6 w-full">
          <div className="flex items-center justify-center gap-3 w-full">
            <Button className="w-full space-x-2">
              <Heart size={20} />
              <p>Like</p>
            </Button>
            <Button className="w-full space-x-2">
              <MessageCircle size={20} />
              <p>Comment</p>
            </Button>
            <Button className="w-full space-x-2">
              <Share size={20} />
              <p>Share</p>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start gap-10 w-full">
            <div
              id="comment_form"
              className="flex items-start justify-start gap-2 w-full"
            >
              <UserAvatar />
              <CreateCommentForm postId={post.id} />
            </div>
            <PostComments postId={post.id} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCard;
