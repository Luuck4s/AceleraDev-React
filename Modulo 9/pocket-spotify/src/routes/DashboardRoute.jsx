import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";

import { endpoints } from "../modules/endpoint";
import { request } from "../modules/request";

import {
  getUserData,
  logout,
  getUserSuccess,
  getUserFailed,
  getCategoriesData,
  getCategoriesSuccess,
  getCategoriesFailed,
} from "../store/actions";

import { WelcomeBox } from "../components";
import { Categories, Dashboard, PrivateRoute, Topbar } from "../containers";

import PlaylistsRoute from "../routes/PlaylistsRoute";
import TracksRoute from "../routes/TracksRoute";

const { getCategories, getUserProfile } = endpoints;

const DashboardRoute = () => {
  const { auth, content, user } = useSelector((state) => state);
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOptions = {
      ...getUserProfile.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getUserData());

    try {
      request(getUserProfile.url, fetchOptions).then((data) =>
        dispatch(getUserSuccess(data))
      );
    } catch (error) {
      if (error === 401) {
        dispatch(logout());

        return;
      }

      dispatch(getUserFailed(error));
    }
  }, [auth, dispatch]);

  useEffect(() => {
    const fetchOptions = {
      ...getCategories.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getCategoriesData());

    try {
      request(getCategories.url, fetchOptions).then((data) =>
        dispatch(getCategoriesSuccess(data))
      );
    } catch (error) {
      if (error === 401) {
        return dispatch(logout());
      }

      dispatch(getCategoriesFailed(error));
    }
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />

          <Categories
            isLoading={
              content.status === "running" && content.categories.length === 0
            }
            data={content.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute path={path} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;
