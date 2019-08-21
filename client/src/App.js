import React from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const App = () => (
  <div className="App">
    <Navbar />
    <Landing />
    {/* <h1>Terp Connector</h1> */}
  </div>
);

export default App;
