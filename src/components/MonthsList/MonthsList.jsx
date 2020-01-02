import React from 'react';
import PropTypes from 'prop-types';

const MonthsList = ({ months, onMonthsHover }) => {
  return (
    <section className="months-list">
      <ul>
        {months.map(({ month, color }) => (
          <li
            key={month}
            style={{color}}
            onMouseOver={() => onMonthsHover(month)}
            onMouseOut={() => onMonthsHover(false)} >
            {month}
          </li>
        ))}
      </ul>
    </section>
  )
};

MonthsList.propTypes = {
  mounths: PropTypes.array,
};

export default MonthsList;
