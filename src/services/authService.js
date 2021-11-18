import axios from "axios";
// import TokenService from './tokenService'
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const API_URL = "http://localhost:3000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken || true) {
        // TokenService.setUSer("user", JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        // const UserContext = createContext(JSON.stringify(response.data));
        // UserContext = JSON.stringify(response.data);
        // console.log(UserContext);
        JSON.stringify(response.data);
      }
      return response.data;
    });
};

// function LoadData() {
//   const [authState, setAuthState] = useContext(UserContext);

//   login().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       setAuthState({
//         ...authState,
//         _id: data.user._id,
//         username: data.user.username,
//         email: data.user.email,
//         password: data.user.password,
//       });
//     }
//   })

//   // return authState;
// };

const logout = () => {
  // TokenService.removeUSer("user");
  localStorage.removeItem("user");
  // sessionStorage.clear();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
  // return JSON.parse(UserContext.state)
  return "Guest";
};

export default { register, login, logout, getCurrentUser, };
