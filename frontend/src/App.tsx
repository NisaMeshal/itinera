import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useMantineTheme } from '@mantine/core';
import Home from './pages/Home';
import About from './pages/About';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  const mantineTheme = useMantineTheme(); // hook to access the active theme,, can i do without this?

  return (
    <BrowserRouter>
      <div className="App">
          {/* <button onClick={apiCall}>Call API</button> */}
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
