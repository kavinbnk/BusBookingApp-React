import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from '../src/Redux/store.js'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainApp/>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
