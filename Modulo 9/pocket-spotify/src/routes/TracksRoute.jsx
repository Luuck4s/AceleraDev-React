import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getPlaylistTracksData,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
} from "../store/actions";

import { request } from "../modules/request";
import { endpoints } from "../modules/endpoint";
import { findContentById } from "../modules/utils";
import { sanitizeUrl } from "../modules/url";

import { Tracks } from "../containers";

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector((state) => state);
  const { getPlaylistTracks } = endpoints;
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  useEffect(() => {
    const fetchOptions = {
      ...getPlaylistTracks.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getPlaylistTracksData());

    try {
      request(
        sanitizeUrl(getPlaylistTracks.url, { playlistId }),
        fetchOptions
      ).then((data) => dispatch(getPlaylistTracksSuccess(data)));
    } catch (error) {
      if (error === 401) {
        return dispatch(logout());
      }

      dispatch(getPlaylistTracksFailed(error));
    }
  }, [auth, dispatch, getPlaylistTracks, playlistId]);

  return (
    <Tracks
      categoryName={findContentById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.staus === "runing"}
      path={path}
    />
  );
};

export default TracksRoute;
