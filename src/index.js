import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';

const divRoot = document.getElementById('root');
const root = ReactDOM.createRoot(divRoot);

// Browser Router is a context that surrounds app and has all the methods to do the routing, 
// all the variables to help you with it and it also has a history of the information regarding the routing      

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
