import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br/>
        <Route path="/aboutuspage" exact component={AboutUs} />
      </div>
    </Router>
  );
}

export default App;