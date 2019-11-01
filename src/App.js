import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

import './App.css';
import Popular from './Components/Popular';
import NavBar from './Components/NavBar';
import Battle from './Components/Battle';
import Footer from './Components/Footer';

const App = () => {

  const [theme, toggleTheme] = useState('Light');

  const toggleIt = () => {
    if(theme === 'Light') {
        toggleTheme('Dark')
    }
    else {
        toggleTheme('Light');
    }
  }

  return (
    <div className={`main ${theme}`}>
      <div className="App">
        <Router>
              <NavBar handleTheme={toggleIt} theme={theme}/>
              <Switch>
                <Route path="/" exact render={() => <Popular theme={theme==='Dark'?'bg-dark':''} />}  />
                <Route path="/battle" render={() => <Battle theme={theme==='Dark'?'bg-dark':''} />} />
              </Switch>
              <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
