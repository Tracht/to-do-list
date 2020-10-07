import React from "react";
import ReactDOM from "react-dom";

import TaskList from "./components/TaskList";

import "./styles.scss";

function App() {
  return <TaskList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
