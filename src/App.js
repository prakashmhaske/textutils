
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (

    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
      {/* user ---> componet 1
      user/home --->---> component 2 */}
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" mode={mode} element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
