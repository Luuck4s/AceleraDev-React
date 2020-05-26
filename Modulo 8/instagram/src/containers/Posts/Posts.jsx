import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      {posts.map((post) => {
        const user = getUserHandler(post.userId);
        
        return <Post key={post.id} postInfo={post} userInfo={user} />;
      })}
    </div>
  );
};

export default Posts;
