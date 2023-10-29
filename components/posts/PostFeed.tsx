import usePosts from "@/hooks/usePosts";
import React, { FC } from "react";
import PostItem from "./PostItem";

interface IPostFeedProps {
  userId?: string;
}

const PostFeed: FC<IPostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
