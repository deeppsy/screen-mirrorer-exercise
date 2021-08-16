import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    query: "",
  };

  updateQuery(query) {
    this.setState(() => ({ query: query }));
  }

  render() {
    const { query } = this.state;

    const showingText = query === "" ? "" : query;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
          <p className="echo">Echo:</p>
          {showingText.length !== 0 && <p>{showingText}</p>}
        </div>
      </div>
    );
  }
}

export default App;
