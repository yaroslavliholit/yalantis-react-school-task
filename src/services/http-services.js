import axios from 'axios';

const API_URL = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

export const getUsers = async () => {
  try {
    const responce = await axios.get(API_URL);
    return responce;
  } catch(error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};
