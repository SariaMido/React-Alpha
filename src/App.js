import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FrontPage from "./components/frontPage";
import NavBar from "./components/navBar";
import SignUp from "./components/signUp";
import backGround from "./components/img/backGround.jpg";
import "./App.css";

class App extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://cdn.wallpapersafari.com/55/73/ghY4rc.jpg')",
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <React.Fragment>
        <div style={myStyle}>
          <NavBar />
          <main className='container'>
            <Routes>
              <Route path='/components/signUp' element={<SignUp />} />
              <Route path='/components/frontPage' element={<FrontPage />} />
              <Route
                path='/'
                element={<Navigate replace to='/components/frontPage' />}
              />
            </Routes>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
