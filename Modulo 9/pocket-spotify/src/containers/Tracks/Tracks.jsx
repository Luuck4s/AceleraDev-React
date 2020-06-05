import React from "react";
import { Loading, RouteHeader } from "../../components";
import Track from "./Track";

import "./Tracks.scss";

const Tracks = ({ categoryName, data = [], isLoading, path }) => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <div className="tracks" data-testid="tracks">
        <div className="container">
          <RouteHeader categoryName={categoryName} path={path} />
          <div className="tracks__content">
            {data.length &&
              data.map(({ track }) => (
                <Track key={`${track.id}`} track={track} />
              ))}
          </div>
        </div>
      </div>
    )}
  </>
);

export default Tracks;
