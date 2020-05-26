import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

import Loading from "../../components/Loading";

import api from "../../services/api";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch(`${api}/users`);
      response = await response.json();

      setUsers(response);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      {loading ? <Loading /> : <UsersList users={users} />}
    </div>
  );
};

export default UsersRoute;
