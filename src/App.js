import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import Movies from './containers/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Route  exact path = "/:movies" component = {Movies}/>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
