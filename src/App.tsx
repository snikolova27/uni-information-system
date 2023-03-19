import React from 'react';
import {Button, TextField } from '@mui/material'
import './App.css';

function App() {
  return (
    <div className="App">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained">Contained</Button>

      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
