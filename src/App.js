import "./App.css";
import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import authService from "./services/authService";
import CurrentUser from "./users/CurrentUser";
import ModUser from "./users/ModUser";
import AdminUser from "./users/AdminUser";
import {UserContext} from "./components/UserContext"

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [showModUser, setShowModUser] = useState(false);
  const [showAdminUser, setShowAdminUser] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModUser(false);
      setShowAdminUser(false);
    }
  }, []);

  // useEffect(()=>{
  //   authService.LoadData()
  // },[])

  const logOut = () => {
    authService.logout();
    setCurrentUser(false);
  };

  return (
    <Router>
      <div className="App">
        {/* <h1>Welcome {currentUser}</h1> */}
        <nav className="appLink">
        <h1>BlazZze</h1>
        <Link className="links"  to="/welcome">Home</Link>

          {showModUser && (
            <li className="links">
              <Link className="links" to="/mod">Moderator Board</Link>
            </li>
          )}

          {showAdminUser && (
            <li className="links">
              <Link className="links"  to="/admin">Admin Board</Link>
            </li>
          )}

          {currentUser && (
            <li className="links">
              <Link className="links" to="/user">User</Link>
            </li>
          )}<br/>

          {currentUser?<div className="user-info">
          <h2>{currentUser.email}</h2>
          <Link className="links" to="/login">
            <button className="appBtn" onClick={logOut}>LogOut</button>
          </Link>
          </div>:
          <div className="log-reg">
          <Link className="links" to="/login">
            <button className="appBtn" >Login</button>
          </Link>
          <Link className="links" to="/register">
            <button className="appBtn" >Register</button>
          </Link>
          </div>
          }
        </nav>
        
        <Switch>
        <UserContext.Provider >
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/user">
            <CurrentUser />
          </Route>
          <Route path="/mod">
            <ModUser />
          </Route>
          <Route path="/admin">
            <AdminUser />
          </Route>
        </UserContext.Provider>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
