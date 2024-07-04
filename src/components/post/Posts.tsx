import { getAllPost } from "@/lib/actions/post";
import React from "react";
import PostCard from "./PostCard";

const Posts = async () => {
  const posts = await getAllPost();
  if (posts == null) return <p>No posts yet!</p>;
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
