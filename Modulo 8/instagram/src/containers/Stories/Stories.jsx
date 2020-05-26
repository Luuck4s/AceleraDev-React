import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const hanldeStory = (story, user) => {
    setSelectedStory(story);
    setSelectedUser(user);
    setShowStory(true);
  };

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const user = getUserHandler(story.userId);

            return (
              <button
                key={story.id}
                onClick={() => hanldeStory(story, user)}
                className={`user__thumb ${
                  index === 0 && `user__thumb--hasNew`
                }`}
              >
                <div className="user__thumb__wrapper">
                  {user && <img src={user.avatar} alt={user.name} />}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          user={selectedUser}
          story={selectedStory}
          handleClose={() => setShowStory(false)}
        />
      )}
    </>
  );
};

export default Stories;
