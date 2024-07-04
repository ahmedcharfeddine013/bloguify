import { Post } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostAuthor from "./PostAuthor";
import { Heart } from "lucide-react";
import { Share } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardHeader className="space-y-6">
        <PostAuthor clerkId={post.userId} />
        <CardTitle className="px-4">{post.title}</CardTitle>
      </CardHeader>
      <div className="px-4">
        <CardContent>{post.content}</CardContent>
        <CardFooter>
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
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCard;
