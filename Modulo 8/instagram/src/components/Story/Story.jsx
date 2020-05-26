import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  const [videoMetaData, setVideoMetaData] = useState(null);
  const [videoActualTime, setVideoActualTime] = useState(null);

  const progressBar = useCallback(() => {
    if (
      videoMetaData &&
      videoMetaData.duration !== null &&
      videoActualTime !== null
    ) {
      return `${((videoActualTime / videoMetaData.duration) * 100).toFixed(
        2
      )}%`;
    }
  }, [videoActualTime, videoMetaData]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>

            <Link to={`/users/${user.username}`} className="user__name">
              {user.name}
            </Link>
          </div>

          <button className="story__close" onClick={() => handleClose()}>
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div
            style={{ width: progressBar() }}
            className="story__progress__elapsed"
          />
        </div>
      </div>

      {story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video
              autoPlay
              className="video-player"
              loop
              playsInline
              onTimeUpdate={(video) =>
                setVideoActualTime(video.target.currentTime)
              }
              onLoadedMetadata={(video) => {
                setVideoMetaData({
                  height: video.target.videoHeight,
                  width: video.target.videoWidth,
                  duration: video.target.duration,
                });
              }}
              src={story.videoUrl}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default Story;
