import styled from 'styled-components';

export const MonthslistWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 35px 0;
  padding: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;
`;

export const MonthslistItem = styled.li`
  position: relative;
  margin: 3px;
  width: 160px;
  padding: 10px;
  text-align: center;
  list-style-type: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid ${({ activeMonths, month, color}) => activeMonths === month ? color : '#e2e2e2' };
  border-radius: 3px;
  color: ${({color}) => color};
  cursor: pointer;
  transition: .5s border;
`;
