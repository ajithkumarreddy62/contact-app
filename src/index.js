import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/contact/contact';
import AddPage from './components/add/add';
import SearchPage from './components/search/search';
import MyCardPage from './components/mycardpage/mycardpage';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/contacts' element={<App />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/mycard' element={<MyCardPage />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
