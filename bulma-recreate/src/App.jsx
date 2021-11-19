import React, {useState} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
// import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FrontPage from "./pages/FrontPage";
import Navbar from "./pages/Navbar";
import LoggedInNavbar from "./pages/LoggedInNavbar";
import ProfilePage from "./pages/ProfilePage";
import MySettings from "./pages/MySettings";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
          {/* {loggedIn && <LoggedInNavbar setLoggedIn={setLoggedIn} />}
      {!loggedIn && <Navbar setLoggedIn={setLoggedIn} />} */}
        {/* <Route path="/" component={Settings} exact /> */}
        <Route path="/" component={FrontPage} exact/>
        <Route path="/profile" component={ProfilePage} exact/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/mysettings" component={MySettings} />
    </BrowserRouter>
  );
};

export default App;
