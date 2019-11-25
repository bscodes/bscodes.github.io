import React from 'react';
// eslint-disable-next-line
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
                    <Navbar/>
                    <Switch>
                        <h1>HELLO</h1>

                        
                    </Switch>
        </HashRouter>  
    </div>
  );
}

export default App;
