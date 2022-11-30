import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode = () => {
    if (mode === 'primary') {
      setMode('dark')
      showAlert("Dark mode activated", "Success")
      setInterval(() => {
        document.title = 'Install TextUtills Now';
      }, 1000);
    }
    else {
      setMode('primary')
      showAlert("Light mode activated", "Success")
      setInterval(() => {
        document.title = 'Install TextUtills Now';
      }, 1000);
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />

      </div>



      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About

                </Link>
              </li>
            </ul>
          </nav>

          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/">
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
