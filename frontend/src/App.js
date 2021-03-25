import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile'
import Account from "./components/Account";
import UpdateAccount from "./components/UpdateAccount";
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import { AuthProvider } from './contexts/AuthProvider';
import TodayTV from './components/TodayTV';

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
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/account" exact component={Account}/>
                    <Route path="/update-account" exact component={UpdateAccount}/>
                    <Route path = "/" exact component = {MoviesList}/>
                    <Route path = "/search" exact component = {Search}/>
                    <Route path = "/today" exact component = {TodayTV}/>
                </div>
            </Router>
        </AuthProvider>
    );
    }

export default App;