import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/http-services';
import UsersList from '../UsersList';
import MonthsList from '../MonthsList';
import Loader from '../Loader';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import { monthsStatistic, monthsListColor, monthsFormat } from '../../helpers';
import { AppWrapper, AppTitle } from './AppStyles';

const App = () => {
  const [ usersOriginal, setUsersOriginal ] = useState(null);
  const [ usersList, setUsersList ] = useState(null);
  const [ months, setMonths ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getUsers()
      .then(({data}) => {
        setMonths(monthsListColor(monthsStatistic(data)));
        setUsersOriginal(data);
        setUsersList(data);
      })
      .catch((error) => {
        throw new Error(`${error}`);
      })
      .finally(() => setLoading(false));
  }, [setUsersList]);

  const filterUsersHandler = (value) => {
    const filterUserList = usersList.filter((item) => monthsFormat(item.dob) === value);
    if (value) return setUsersList(filterUserList);

    return setUsersList(usersOriginal);
  };

  if (loading) return <Loader />;

  return (
    <div className="app">
      <ErrorBoundary>
        <AppWrapper>
          <AppTitle>Yalantis React.js School Application</AppTitle>
          <MonthsList
            onMonthsHover={filterUsersHandler}
            months={months} />
          <UsersList usersList={usersList} />
          <Footer />
        </AppWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
