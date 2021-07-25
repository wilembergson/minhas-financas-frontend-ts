import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="routes">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
