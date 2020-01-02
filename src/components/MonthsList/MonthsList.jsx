import React from 'react';
import PropTypes from 'prop-types';
import { MonthslistWrapper, MonthslistItem } from './MonthsListStyles';

const MonthsList = ({ months, onMonthsHover }) => (
  <MonthslistWrapper>
    {months.map(({ month, color }) => (
      <MonthslistItem
        color={color}
        key={month}
        onMouseOver={() => onMonthsHover(month)}
        onMouseOut={() => onMonthsHover(false)} >
        { month }
      </MonthslistItem>
    ))}
  </MonthslistWrapper>
);

MonthsList.propTypes = {
  mounths: PropTypes.array,
  onMonthsHover: PropTypes.func,
};

export default MonthsList;
