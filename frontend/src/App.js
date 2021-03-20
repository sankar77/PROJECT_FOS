import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ShowCard from './components/ShowCard';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <ShowCard id="tt0114709"/>
        <br/>
        <Route path="/aboutuspage" exact component={AboutUs} />
      </div>
    </Router>
  );
}

export default App;
