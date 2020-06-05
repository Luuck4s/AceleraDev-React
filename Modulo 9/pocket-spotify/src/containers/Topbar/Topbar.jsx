import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import { useSelector } from "react-redux";
import "./Topbar.scss";

import { Logo } from "../../components";

const Topbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <span className="user__name">{user.name}</span>

          <figure className="user__thumb">
            {user.thumb !== "" ? (
              <img src={user.thumb} alt={`foto de perfil de ${user.name}`} />
            ) : (
              <FaUserAlt size={25}  />
            )}
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
