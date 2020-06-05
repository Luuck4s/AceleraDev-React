import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addPlayerTrack, removePlayerTrack } from "../../store/actions";

import { BsPlayFill, BsVolumeUpFill } from "react-icons/bs";
import Ink from "react-ink";
import "./Track.scss";

const Track = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();
  const playingNowId = useSelector((state) => state.content.playingNowId);

  const handleClick = () => {
    if (isPlaying && playingNowId === track.id) {
      setIsPlaying(false);
      dispatch(removePlayerTrack());

      return;
    }

    dispatch(addPlayerTrack(track));

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (playingNowId === track.id) {
      return setIsPlaying(true);
    }

    setIsPlaying(false);
  }, [playingNowId, track.id]);

  return (
    <div
      className={`track ${isPlaying && "is-playing"}`}
      data-testid="track"
      onClick={handleClick}
    >
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play__icon" />
          <BsVolumeUpFill className="track__play__icon" />
        </div>
      </div>

      <div className="track__info">
        <span className="track__name">{track.name}</span>

        <span className="track__artists">
          {track.artists.length &&
            track.artists.map(({ name }) => name).join(", ")}
        </span>
      </div>

      <Ink />
    </div>
  );
};

export default Track;
