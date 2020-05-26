import React from "react";

import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={name} />
            </div>
            {name && (
              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
