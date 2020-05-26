import React from "react";

import { Link } from "react-router-dom";

const User = ({ infoUser }) => {
  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${infoUser.username}`} className="user">
          <div className="user__thumb">
            {infoUser.avatar ? (
              <img src={infoUser.avatar} alt={infoUser.name} />
            ) : (
              <img
                src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                alt="Not found"
              />
            )}
          </div>

          <div className="user__name">{infoUser.name}</div>
        </Link>
      </header>
    </article>
  );
};

export default User;
