

import { Post } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostAuthor from "./PostAuthor";
import { Share } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import PostComments from "../comment/PostComments";
import CreateCommentForm from "../forms/comment/CreateCommentForm";
import UserAvatar from "../user/UserAvatar";
import LikePost from "../like/LikePost";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="bg-white/10">
      <CardHeader className="space-y-6">
        <PostAuthor clerkId={post.userId} />
        <CardTitle className="px-4">{post.title}</CardTitle>
      </CardHeader>
      <div className="flex  justify-center flex-col w-full px-4 space-y-6 ">
        <CardContent>{post.content}</CardContent>
        <div className="flex items-center justify-center  pt-1 bg-primary/50 mx-10 rounded-3xl"></div>
        <CardFooter className="flex items-start justify-start flex-col gap-6 w-full">
          <div className="flex items-center justify-start gap-3 w-full">
            <LikePost postId={post.id} />
            <Button className="bg-transparent hover:bg-transparent hover:scale-125 transition-all ease-in duration-100">
              <MessageCircle size={20} />
            </Button>
            <Button className="bg-transparent hover:bg-transparent hover:scale-125 transition-all ease-in duration-100">
              <Share size={20} />
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
