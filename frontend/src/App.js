import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ShowCard from './components/ShowCard';

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        
          <Container className="justify-content-around" style={{display:'flex'}}>
            <Row>
              <Col><ShowCard id="tt0114709" movie="true"/></Col>
              <Col><ShowCard id="1402" movie="false"/></Col>
              <Col><ShowCard id="tt0114709" movie="true"/></Col>
            </Row>
          </Container>
        
        <br/>
        
        <Route path="/aboutuspage" exact component={AboutUs} />
        </Container>
    </Router>
  );
}

export default App;
