import React from 'react';
import PropTypes from 'prop-types';
import { dateFormating } from '../../helpers';
import { UserItemWrapper, UserDetailsWrapper, UserDetailsItem } from './UserItemStyles';

const UserItem = ({ firstName, lastName, dob}) => (
  <UserItemWrapper>
    <UserDetailsWrapper>
      <UserDetailsItem>First name: {firstName}</UserDetailsItem>
      <UserDetailsItem>Last name: {lastName}</UserDetailsItem>
      <UserDetailsItem>Birthday: { dateFormating(dob) }</UserDetailsItem>
    </UserDetailsWrapper>
  </UserItemWrapper>
);

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default UserItem;
