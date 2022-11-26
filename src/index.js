import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Template/components/Main';
// import App from './App';
// import Rdux from './Rdux';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './USER_REDUX/Store';
// import Redux2 from './Redux2';
// import Users from './components/Users';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
