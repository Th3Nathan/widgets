import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const names = ["nathan", "calvin", "michael", "Euridiche", "Orpheus", "Constantine", "Jeremiah", "Jesus", "Beethoven", "Brie", "Brieanna"];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<App />, root);
});

export default names;
