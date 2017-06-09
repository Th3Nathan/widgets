import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<App />, root);
});
