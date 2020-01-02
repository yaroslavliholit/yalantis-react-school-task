import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';
import { UsersListWrapper } from './UsersListStyles';

const UsersList = ({ usersList }) => (
  <UsersListWrapper>
    {usersList.map((user) => {
      const { id, ...props} = user;
      return <UserItem key={id} {...props} />;
    })}
  </UsersListWrapper>
);

UsersList.propTypes = {
  usersList: PropTypes.array,
};

export default UsersList;
