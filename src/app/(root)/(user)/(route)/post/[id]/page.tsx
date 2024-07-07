import React from "react";

const PostPage = ({ params: { id } }: { params: { id: string } }) => {
  return <div>{id}</div>;
};

export default PostPage;
