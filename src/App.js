import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import Movies from './containers/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Movies/>
      </div>
    </BrowserRouter>
  );
}

export default App;
