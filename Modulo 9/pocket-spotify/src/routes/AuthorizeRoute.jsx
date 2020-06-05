import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authCallbackError, authCallbackSucess } from "../store/actions";

import { getInfoFromUrl } from "../modules/url";

import { Authorize } from "../containers";

const AuthorizeRoute = () => {
  const [redirect, setRedirect] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  const url = window.location.hash;

  useEffect(() => {
    const urlData = getInfoFromUrl(url);

    if (urlData.error) {
      return dispatch(authCallbackError(urlData.error));
    }

    dispatch(authCallbackSucess(urlData));
  }, [dispatch, url]);

  useEffect(() => {
    if (isLogged) {
      setRedirect(true);
    }
  }, [isLogged]);

  if (redirect) {
    return <Redirect to={{ pathname: "/dashboard" }} />;
  }

  return <Authorize />;
};

export default AuthorizeRoute;
