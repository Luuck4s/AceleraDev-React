import React from "react";

import { Player } from "../";
import { useSelector } from "react-redux";

import "./Dashboard.scss";

const Dashboard = ({ children }) => {
  const playerHeight = useSelector((state) => state.content.playerHeight);

  return (
    <div
      className="dashboard"
      data-testid="dashboard"
      style={{ paddingBottom: `${playerHeight}px` }}
    >
      {children}

      <Player />
    </div>
  );
};

export default Dashboard;
