import React from "react";
import "./App.css";
import Leads from "./leads";
import AddLead from "./addLead";
import logo from "./team.svg";

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <h1>Leads List</h1>
        <AddLead className="rounded shadow" />
        <Leads />
        <img src={logo} alt="logo" className="mt-5" height="200px" />
        <div className="bg-info rounded shadow p-1 col-md-3">
          <h5>Noel Sasikanth</h5>
          <h6>noelsasikanth@gmail.com</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
