import React, { Component } from "react";
import "./App.css";

import EmailList from "./components/EmailList";

const emails = [
  { id: 1, name: "aku@hotbanget.com" },
  { id: 2, name: "ayang@hotbanget.com" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dropshipr</h1>
        </header>

        <EmailList emails={emails} />
      </div>
    );
  }
}

export default App;
