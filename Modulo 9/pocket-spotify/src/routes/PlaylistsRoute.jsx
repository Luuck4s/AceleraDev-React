import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { request } from "../modules/request";

import {
  getCategoryPlaylistData,
  getCategoryPlaylistSuccess,
  getCategoryPlaylistFailed,
  logout,
} from "../store/actions";

import { endpoints } from "../modules/endpoint";
import { findContentById } from "../modules/utils";
import { sanitizeUrl } from "../modules/url";

import { Playlists } from "../containers";

const PlaylistsRoute = ({ path }) => {
  const { auth, content } = useSelector((state) => state);
  const { getCategoryPlaylists } = endpoints;
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchOptions = {
      ...getCategoryPlaylists.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getCategoryPlaylistData());

    try {
      request(
        sanitizeUrl(getCategoryPlaylists.url, { categoryId }),
        fetchOptions
      ).then((data) => dispatch(getCategoryPlaylistSuccess(data)));
    } catch (error) {
      if (error === 401) {
        return dispatch(logout());
      }

      dispatch(getCategoryPlaylistFailed(error));
    }
  }, [auth, categoryId, dispatch, getCategoryPlaylists]);

  return (
    <Playlists
      categoryId={categoryId}
      categoryName={findContentById(categoryId, content.categories)}
      data={content.playlists}
      path={path}
      isLoading={content.status === "running" && content.playlists.length === 0}
    />
  );
};

export default PlaylistsRoute;
