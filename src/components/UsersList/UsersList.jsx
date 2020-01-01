import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';
import Loader from '../Loader';

const UsersList = ({ usersList }) => {
  if (!usersList) {
    return <Loader />;
  }

  return (
    <ul>
      {usersList.map((user) => {
        const { id, firstName, lastName, dob} = user;

        return (
          <li key={id}>
            <UserItem
              firstName={firstName}
              lastName={lastName}
              dob={dob} />
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
