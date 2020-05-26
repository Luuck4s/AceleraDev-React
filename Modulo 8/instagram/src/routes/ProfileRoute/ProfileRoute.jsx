import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import { useParams } from "react-router-dom";

import Loading from "../../components/Loading";

import api from "../../services/api";

const ProfileRoute = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      let response = await fetch(`${api}/users?search=${username}`);
      [response] = await response.json();

      setUser(() => response);
    };

    fetchUser();
  }, [username]);

  useEffect(() => {
    if (!user.id) {
      return;
    }

    const fetchPosts = async () => {
      let response = await fetch(`${api}/users/${user.id}/posts`);
      response = await response.json();

      setPosts(response);
      setLoading(false);
    };

    fetchPosts();
  }, [user]);

  return (
    <div data-testid="profile-route">
      {loading ? (
        <Loading />
      ) : (
        <>
          <UserProfile {...user} />
          <UserPosts posts={posts} />
        </>
      )}
    </div>
  );
};

export default ProfileRoute;
