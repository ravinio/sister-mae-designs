import React from 'react';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn fucking React
        </a>
        <Button variant="contained" color="secondary">hello</Button>
      </header>
    </div>
  );
}

export default App;
