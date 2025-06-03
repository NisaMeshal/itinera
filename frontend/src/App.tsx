import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Call API</button>
      </header>
    </div>
  );
}

export default App;
