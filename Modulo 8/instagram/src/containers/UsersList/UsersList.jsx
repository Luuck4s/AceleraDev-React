import React from 'react';

import User from '../../components/User';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="users-list">
      {users.map((user) => <User key={user.id} infoUser={user} />)}
    </section>
  )
};

export default UersList;
