import React from 'react';
// eslint-disable-next-line
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
/* import Navbar from './components/Navbar/Navbar'; */
import './App.scss';

function App() {
  return (
    <div className="App title-font">
      <HashRouter basename="/">
                    {/* <Navbar/> */}
                    <Switch>
                    <Route exact path = {'/'} component = {Home}/>    
                    </Switch>
        </HashRouter>  
    </div>
  );
}

export default App;
