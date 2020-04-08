import { USER_LOGIN } from "../utils/constants";
import axios from "axios";

// export const userRegister = user => {
//   return {
//     type: USER_REGISTER,
//     payload: user
//   };
// };

export const userLogin = user => ({
  type: USER_LOGIN,
  user
});

// export const loginCreator = user => {
//   axios.post("/api/user/register", user).then(user => {
//     store.dispatch(userLogin(user.data));
//     // user.data.admin == true && history.push("/admin")
//     return user.data;
//   });
// };
export const createUser = (username, email, password) => {
  return function(dispatch) {
    axios
      .post("/api/user/register", {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        dispatch(userLogin(res.data));
      });

  };
};

// export const registerCreator = user => dispatch =>
//   axios
//     .post("/api/user/register", user)
//     .then(user => dispatch(userRegister(user.data)));
