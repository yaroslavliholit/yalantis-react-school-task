import React from 'react';
import PropTypes from 'prop-types';
import { dateFormating } from '../../helpers';
import { UserItemWrapper, UserDetailsWrapper, UserDetailsItem, UserItemLabel } from './UserItemStyles';

const UserItem = ({ firstName, lastName, dob}) => (
  <UserItemWrapper>
    <UserDetailsWrapper>
      <UserDetailsItem><UserItemLabel>First name:</UserItemLabel> {firstName}</UserDetailsItem>
      <UserDetailsItem><UserItemLabel>Last name:</UserItemLabel> {lastName}</UserDetailsItem>
      <UserDetailsItem><UserItemLabel>Birthday:</UserItemLabel> { dateFormating(dob) }</UserDetailsItem>
    </UserDetailsWrapper>
  </UserItemWrapper>
);

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default UserItem;
