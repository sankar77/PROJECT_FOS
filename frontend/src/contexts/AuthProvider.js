import React, { useContext, useEffect, useState } from 'react';
import firebase from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        signUp
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
