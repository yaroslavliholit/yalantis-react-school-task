import React from 'react';
import PropTypes from 'prop-types';

const MonthsList = ({monthsList}) => {
  return (
    <section className="months-list">
      <ul>
        {monthsList.map((month) => <li key={month}>{month}</li>)}
      </ul>
    </section>
  )
};

MonthsList.propTypes = {
  monthsList: PropTypes.array.isRequired,
};

export default MonthsList;
