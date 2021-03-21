import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from './contexts/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <NavBar/>
                    <br/>
                    <PrivateRoute path="/aboutuspage" exact component={AboutUs}/>
                    <PrivateRoute path="/signup" exact component={SignUp}/>
                    <PrivateRoute path="/login" exact component={Login}/>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
