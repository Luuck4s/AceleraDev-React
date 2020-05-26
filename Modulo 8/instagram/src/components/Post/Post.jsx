import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link
              to={`/users/${userInfo.username || ""}`}
              className="user__thumb"
            >
              <img src={userInfo.avatar} alt={userInfo.name || ""} />
            </Link>

            <Link
              to={`/users/${userInfo.username || ""}`}
              className="user__name"
            >
              {userInfo.name || ""}
            </Link>
          </div>
          <button
            className="post__context"
            onClick={() => setFollowing(!following)}
          >
            {following ? (
              <span className="follow-btn is-following">Seguindo</span>
            ) : (
              <span className="follow-btn">Seguir</span>
            )}
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="Post" />
      </figure>

      {userInfo && (
        <nav className="post__controls">
          <button
            className="post__control"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>

          {userInfo && postInfo.comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>
                  curtido por <Link to="#">{postInfo.comments[0].name}</Link> e
                  outras{" "}
                  <Link to="#">
                    {isLiked
                      ? postInfo.likes.length + 1
                      : postInfo.likes.length}{" "}
                    pessoas.
                  </Link>
                </span>
              </div>
            </div>
          )}
        </nav>
      )}
    </article>
  );
};

export default Post;
