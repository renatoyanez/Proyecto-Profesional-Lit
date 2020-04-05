import { USER_LOGIN } from "../utils/constants";
import axios from "axios";

// export const userRegister = user => {
//   return {
//     type: USER_REGISTER,
//     payload: user
//   };
// };

export const userLogin = user => {
  return {
    type: USER_LOGIN,
    payload: user
  };
};

export const loginCreator = user => {
  return axios.post("/api/user/login", user).then(user => {
    dispatch(userLogin(user.data));
  });
};

// export const registerCreator = user => dispatch =>
//   axios
//     .post("/api/user/register", user)
//     .then(user => dispatch(userRegister(user.data)));
