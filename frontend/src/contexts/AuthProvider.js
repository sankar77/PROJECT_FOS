import React, { useContext, useEffect, useState } from 'react';
import firebase from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    const logOut = () => {
        return firebase.auth().signOut();
    }

    const resetPassword = (email) => {
        return firebase.auth().sendPasswordResetEmail(email);
    };

    const updateEmail = (email) => {
        return user.updateEmail(email);
    };

    const updatePassword = (password) => {
        return user.updatePassword(password);
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updateEmail,
        updatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
