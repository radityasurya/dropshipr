import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import EmailList from "./components/EmailList";

const emails = [
  { id: 1, name: "Raditya" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <EmailList emails={emails} />
      </div>
    );
  }
}

export default App;
