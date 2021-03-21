import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import MovieCard from './components/MovieCard';
import TVShowCard from './components/TVShowCard';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/aboutuspage" exact component={AboutUs} />
      </Router>

      <Container className="justify-content-around" style={{display:'flex'}}>
        <Row>
          <Col><MovieCard id="862"/></Col>
          <Col><TVShowCard id="1402"/></Col>
          <Col><MovieCard id="1402"/></Col>
          <Col><TVShowCard id="1401"/></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
