import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';

const UsersList = ({ usersList }) => {
  return (
    <ul>
      {usersList.map((user) => {
        const { id, ...props} = user;
        return (
          <li key={id}>
            <UserItem {...props} />
          </li>
        )
      })}
    </ul>
  )
};

UsersList.propTypes = {
  usersList: PropTypes.array,
};

export default UsersList;
