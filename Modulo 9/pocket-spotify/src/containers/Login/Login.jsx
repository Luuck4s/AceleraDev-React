import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import Ink from "react-ink";
import "./Login.scss";

import { Logo } from "../../components";

import { endpoints } from "../../modules/endpoint";

import backgroundImageMobile from "../../assets/images/app-intro-1.jpg";
import backgroundImageDesktop from "../../assets/images/app-intro-2.jpg";

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);
  const screenWidth = window.innerWidth;

  const resizeHandle = (event) => {
    const { innerWidth } = event.target;

    if (innerWidth <= 768) {
      return setIsMobile(true);
    }

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resizeHandle, 250));

    return () => {
      window.removeEventListener("resize", debounce(resizeHandle));
    };
  }, []);

  const getBackground = () => {
    return isMobile || screenWidth <= 768
      ? backgroundImageMobile
      : backgroundImageDesktop;
  };

  return (
    <main
      className="login"
      style={{
        backgroundImage: `url(${getBackground()})`,
      }}
      data-testid="login"
    >
      <div className="container">
        <Logo />

        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong>
            mas toca o seu
            <span
              role="img"
              className="login__microcopy__heart"
              aria-label="Coração"
            >
              ❤️
            </span>
          </strong>
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com Spotify
          <Ink />
        </a>
      </div>
    </main>
  );
};

export default Login;
