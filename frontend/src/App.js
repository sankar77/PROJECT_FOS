import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Preference from './components/Preference'
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from './contexts/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <NavBar/>
                    <br/>
                    <Route path="/aboutuspage" exact component={AboutUs}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/forgot-password" exact component={ForgotPassword}/>
                    <Route path="/pref" exact component={Preference}/>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
