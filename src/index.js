import React from "react";
import ReactDOM from "react-dom";

import TaskList from "./components/TaskList";
import "./styles.scss";

function App() {
  return <TaskList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
