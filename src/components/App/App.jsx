import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/http-services';
import UsersList from '../UsersList';

const App = () => {
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    getUsers()
      .then(({data}) => setUsersList(data))
      .catch((error) => {
        throw new Error(`${error}`)
      })
  }, [setUsersList]);

  return (
    <div className="app">
      <UsersList usersList={usersList} />
    </div>
  );
};

export default App;
