import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/assets/styles/main.css';
import './components/assets/styles/nav.css'
import './components/assets/styles/aboutMe.css'
import './components/assets/styles/contact.css'
import './components/assets/styles/resume.css'
import './components/assets/styles/footer.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
