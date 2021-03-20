import React, {Component, useEffect, useState} from 'react';
import firebase from '../firebase';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser(user));
    }, []);

    return (
        <AuthContext.Provider value={{user}}> {children} </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {};
