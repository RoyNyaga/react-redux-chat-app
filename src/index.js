import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase"
import { Provider } from "react-redux"

const firebaseConfig = {
  apiKey: "AIzaSyBABBe8sukZdCtiapnUtPJ76rx5xYKqFvk",
  authDomain: "web-messenger-531a0.firebaseapp.com",
  databaseURL: "https://web-messenger-531a0.firebaseio.com",
  projectId: "web-messenger-531a0",
  storageBucket: "web-messenger-531a0.appspot.com",
  messagingSenderId: "949425962326",
  appId: "1:949425962326:web:a9e5e65ab6b9233ca1aaf7",
  measurementId: "G-FLK30NS4M9"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
