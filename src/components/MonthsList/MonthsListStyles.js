import styled from 'styled-components';

export const MonthslistWrapper = styled.ul`
  padding: 0;
  padding-bottom: 10px;
  margin: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid #e2e2e2;
`;

export const MonthslistItem = styled.li`
  position: relative;
  padding: 0 10px;
  text-align: center;
  list-style-type: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({color}) => color};
  cursor: pointer;

  &:after {
    position: absolute;
    left: 0;
    bottom: -12.5px;
    content: '';
    width: 100%;
    height: 3px;
    opacity: 0;
    background-color: ${({color}) => color};
    transition: .5s opacity;
  }

  &:hover:after {
    opacity: 1;
  }

  @media (max-width: 1055px) {
    &:after {
      display: none;
    }
  }
`;
