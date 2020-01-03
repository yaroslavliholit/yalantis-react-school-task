import React from 'react';
import PropTypes from 'prop-types';
import { MonthslistWrapper, MonthslistItem } from './MonthsListStyles';

const MonthsList = ({ months, activeMonths, onMonthsHover }) => (
  <MonthslistWrapper>
    {months.map(({ month, color }) => (
      <MonthslistItem
        activeMonths={activeMonths}
        month={month}
        color={color}
        key={month}
        onMouseOver={() => onMonthsHover(month)} >
        { month }
      </MonthslistItem>
    ))}
  </MonthslistWrapper>
);

MonthsList.propTypes = {
  mounths: PropTypes.array,
  onMonthsHover: PropTypes.func,
  activeMonths: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
};

export default MonthsList;
