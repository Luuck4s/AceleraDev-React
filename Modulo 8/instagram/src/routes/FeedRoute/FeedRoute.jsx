import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import api from "../../services/api";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch(`${api}/users`);
      response = await response.json();

      setUsers(response);
    };

    const fetchStories = async () => {
      let response = await fetch(`${api}/stories`);
      response = await response.json();

      setStories(response);
    };

    fetchStories();
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = () => {
      const usersId = users.map((user) => user.id);

      usersId.map(async (id) => {
        let response = await fetch(`${api}/users/${id}/posts`);
        response = await response.json();

        setPosts(posts => [...posts, ...response])
      });
    };
    
    fetchPosts();
  }, [users]);

  const getUserHandler = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && posts.length > 0 ? (
        <>
          <Stories stories={stories} getUserHandler={getUserHandler} />
          <Posts posts={posts} getUserHandler={getUserHandler} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FeedRoute;
