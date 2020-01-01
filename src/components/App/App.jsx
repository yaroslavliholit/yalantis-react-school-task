import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/http-services';
import { monthsList } from '../../helpers';
import UsersList from '../UsersList';
import MonthsList from '../MonthsList';

const App = () => {
  const [ usersList, setUsersList ] = useState(null);
  const [ months ] = useState(monthsList());

  useEffect(() => {
    getUsers()
      .then(({data}) => setUsersList(data))
      .catch((error) => {
        throw new Error(`${error}`)
      })
  }, [setUsersList]);

  return (
    <div className="app">
      <MonthsList monthsList={months} />
      <UsersList usersList={usersList} />
    </div>
  );
};

export default App;
