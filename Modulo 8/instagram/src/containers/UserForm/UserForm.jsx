import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

import api from "../../services/api";

const UserForm = () => {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sucess, setSucess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUserObj = JSON.stringify({
      avatar,
      username,
      name,
      email,
    });

    await fetch(`${api}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newUserObj,
    });

    setSucess(true);
  };

  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Fulano da Silva"
              onChange={(event) => setName(event.target.value)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: fulano_da_silva"
              onChange={(event) => setUsername(event.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => setAvatar(event.target.value)}
            />

            <button onClick={(event) => handleSubmit(event)} type="button">
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {sucess && <SuccessMessage />}
    </>
  );
};

export default UserForm;
