import React, { useEffect, useReducer } from 'react';
import { getUsers } from '../../services/http-services';
import UsersList from '../UsersList';
import MonthsList from '../MonthsList';
import Loader from '../Loader';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import { AppWrapper, AppTitle, HelpMessage } from './AppStyles';
import { initialState, reducer } from '../../store/reducer';
import { loadUsersSuccess, loadUsersError, loadMonths, filterUsers } from '../../store/actions';

const App = () => {
  const [ { usersList, months, activeMonths, loading }, dispatch ] = useReducer(reducer, initialState);

  const filterUsersHandler = (value) => dispatch(filterUsers(value));

  useEffect(() => {
    getUsers()
      .then(({data}) => {
        dispatch(loadUsersSuccess(data));
        dispatch(loadMonths( data ));
      })
      .catch((error) => {
        dispatch(loadUsersError());
        throw new Error(`${error}`);
      })
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <ErrorBoundary>
        <AppWrapper>
          <AppTitle>Yalantis React.js School App</AppTitle>
          <MonthsList
            onMonthsHover={filterUsersHandler}
            months={months} />
            {
              activeMonths
              ? <UsersList usersList={usersList} />
              : <HelpMessage>Hover on months to see the users</HelpMessage>
            }
          <Footer />
        </AppWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
