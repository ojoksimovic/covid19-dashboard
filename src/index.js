import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalGraphs from './GlobalGraphs'
import reportWebVitals from './reportWebVitals';
import CanadaGraphs from './CanadaGraphs';
import MediaCard from './GlobalCards';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalGraphs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
