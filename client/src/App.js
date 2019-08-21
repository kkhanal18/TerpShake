import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </section>

      {/* <h1>Terp Connector</h1> */}
    </div>
  </Router>
);

export default App;
