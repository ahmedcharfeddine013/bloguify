"use client";

import { getAllPost } from "@/lib/actions/post";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Post } from "@prisma/client";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getAllPost()
      .then((data) => setPosts(data))
      .catch((error) => console.log("Error fetching posts: ", error));
  }, []);

  if (posts == null) return <p>No posts yet!</p>;
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
