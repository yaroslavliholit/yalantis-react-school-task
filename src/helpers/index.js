import moment from 'moment';

export const dateFormating = (date) => {
  return moment(date).format('MMMM Do YYYY');
};

export const monthsList = () => moment.months();
