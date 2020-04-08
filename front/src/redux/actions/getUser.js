import { USER_LOGIN } from "../utils/constants";
import axios from "axios";

export const userLogin = user => ({
  type: USER_LOGIN,
  user
});

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

export const userLoginCreator = (theUser) => {
  console.log("The user: ", theUser);
  
  return dispatch => {
    axios
      .post("/api/user/login", theUser)
      .then(user => {
        dispatch(userLogin(user.data));
      });
  };
};

/****** Para cuando exista usuario admin: *****/
// export const loginCreator = user => {
//   axios.post("/api/user/register", user).then(user => {
//     store.dispatch(userLogin(user.data));
//     // user.data.admin == true && history.push("/admin")
//     return user.data;
//   });
// };
