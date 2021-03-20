import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import {AuthProvider} from './contexts/AuthProvider';

function App() {
    return (
        // <AuthProvider>
            <Router>
                <div className="container">
                    <NavBar/>
                    <br/>
                    <Route path="/aboutuspage" exact component={AboutUs}/>
                    <Route path="/register" exact component={Register}/>
                </div>
            </Router>
        //</AuthProvider>
    );
}

export default App;
