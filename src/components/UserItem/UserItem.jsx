import React from 'react';
import PropTypes from 'prop-types';
import { dateFormating } from '../../helpers';

const UserItem = ({ firstName, lastName, dob}) => (
  <React.Fragment>
    <ul>
      <li>First name: {firstName}</li>
      <li>Last name: {lastName}</li>
      <li>Birthday: { dateFormating(dob) }</li>
    </ul>
  </React.Fragment>
);

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default UserItem;
