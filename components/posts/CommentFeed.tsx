import React, { FC } from "react";
import CommentItem from "./CommentItem";

interface ICommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: FC<ICommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment}></CommentItem>
      ))}
    </>
  );
};

export default CommentFeed;
