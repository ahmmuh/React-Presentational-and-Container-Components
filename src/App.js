import React, { Component } from "react";
import "./App.css";

function Button(props) {
  return (
    <button className="btn" onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}

class Sidebar extends Component {
  handelSidebar = () => {
    console.log("sidebar");
  };
  render() {
    return (
      <div>
        <Button onClick={this.handelSidebar} text="Sidebar" />
      </div>
    );
  }
}

class Form extends Component {
  onClick() {
    console.log("form submitted");
  }
  render() {
    return <Button onClick={() => this.onClick()} text="Submit" />;
  }
}

class App extends Component {
  onClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <div className="App">
        <Form />
        <Button onClick={() => this.onClick()} text="App" />
        <Sidebar />
      </div>
    );
  }
}

export default App;
