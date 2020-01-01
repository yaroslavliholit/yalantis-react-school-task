import axios from 'axios';

const API_URL = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

export const getUsers = async () => {
  const responce = await axios.get(API_URL);
  return responce;
};
