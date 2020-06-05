import React from "react";
import { Link } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";

import "./RouteHeader.scss";

const RouterHeader = ({ categoryName, path }) => (
  <div className="route-header" data-testid="route-header">
    <div className="route-header__title-group">
      <Link to={path} className="back-button">
        <RiArrowLeftLine />
      </Link>

      <span className="route-header__title">{categoryName}</span>
    </div>
  </div>
);

export default RouterHeader;
