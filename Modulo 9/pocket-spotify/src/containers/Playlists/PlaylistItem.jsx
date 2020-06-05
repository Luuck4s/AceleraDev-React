import React from "react";
import Ink from "react-ink";
import { Link } from "react-router-dom";

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => (
  <div className="playlists__item" data-testid="playlist">
    <Link
      className="playlists__item__link"
      style={{ backgroundImage: `url(${image.url})` }}
      title={name}
      to={`${path}/${categoryId}/${id}`}
    >
      <Ink />
    </Link>

    <p className="playlists__item__description">
      <strong>{name}</strong>
      {description}
    </p>
  </div>
);
export default PlaylistItem;
