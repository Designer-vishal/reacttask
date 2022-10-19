import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [time,chnagetime] = useState(new Date().toLocaleTimeString()) 
  const changetime = () =>{
    chnagetime(new Date().toLocaleTimeString())
  }
  return (
    <div className="App">
      <header className="App-header d-none">
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
          Learn React
        </a>
      </header>
      <div className='text-center d-none'>
        <h4>{time}</h4>
        <button className='btn btn-primary' onClick={changetime}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
