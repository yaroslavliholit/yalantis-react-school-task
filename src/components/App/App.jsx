import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/http-services';

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

    </div>
  );
};

export default App;
