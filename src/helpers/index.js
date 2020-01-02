import moment from 'moment';

export const dateFormating = (date) => moment(date).format('MMMM Do YYYY');

export const monthsFormat = (month) => moment(month).format('MMMM');

export const monthsList = () => moment.months();

export const monthsStatistic = (monthsList) => {
  const result = [];
  monthsList.forEach(({dob}) => {
    const inArray = result.find(({ month }) => month === monthsFormat(dob) );

    if (inArray) {
      inArray.count += 1;
      return false;
    }

    result.push({ month: monthsFormat(dob), count: 1 });
  });

  return result;
};

export const monthsListColor = (array) => array.map(({count, month}) => {
  let color;

  if (count <= 2) {
    color = 'gray';
  } else if (count >= 2 && count <= 6) {
    color = 'blue';
  } else if (count >= 7 && count <= 10) {
    color = 'green';
  } else if (count >= 11) {
    color = 'red';
  }

  return { month, color };
});
