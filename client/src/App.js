import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Start from './Components/Start/index.jsx'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    </div>
    <Switch>
      <Route path="/" exact component= {Start}/>
      <Route path="/Home" component= {Home}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
