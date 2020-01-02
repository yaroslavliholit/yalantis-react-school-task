import styled from 'styled-components';

export const UserItemWrapper = styled.li`
  width: 100%;
  max-width: 15rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 20px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  box-shadow: 5px 5px 15px -10px rgba(0,0,0,0.25);
  list-style-type: none;
`;

export const UserDetailsWrapper = styled.ul`
  padding: 0;
`;

export const UserDetailsItem = styled.li`
  padding-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  list-style-type: none;
`;

export const UserItemLabel = styled.b`
  display: inline-block;
  width: 90px;
  font-weight: 700;
`;
