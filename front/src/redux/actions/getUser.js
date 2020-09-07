import { USER_LOGIN, USER_LOGOUT } from "../utils/constants";
import axios from "axios";

export const userLogin = user => ({
  type: USER_LOGIN,
  user
});

export const userLogout = () => ({
  type: USER_LOGOUT
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

export const userLoginCreator = theUser => {
  return dispatch => {
    axios.post("/api/user/login", theUser, history).then(user => {
      dispatch(userLogin(user.data));
      return user.data
    });
  };
};


export const logOutCreator = () => {
  return function(dispatch) {
    return axios.get("/api/user/logout").then(() => {
      dispatch(userLogout())
      
    });
  };
};

export const fetchLoggedUser = () => dispatch => 
  axios.get("/api/user/auth").then(res => {
    dispatch(userLogin(res.data));
    return res.data;
  });