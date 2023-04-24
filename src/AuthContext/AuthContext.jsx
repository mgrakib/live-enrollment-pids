import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../FireBase/firebase.config';

// create contex
export const AuthcontextAPI = createContext([]);
// make auth 
const auth = getAuth(app)


const AuthContext = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // handel create new accout 
    const creatAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // handel update profile 
    const setNamePhoto = userName => {
        return updateProfile(auth.currentUser, { displayName: userName });
	};
    

    // handel sing in 
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // handel log out 
    const logOut = () => {
       return signOut(auth)		
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();

    },[])
    
    const authInfo = {
		user,
		creatAccount,
		setNamePhoto,
		singIn,
		logOut,
		loading,
	};

    return (
        <AuthcontextAPI.Provider value={authInfo}>
		    {children}
        </AuthcontextAPI.Provider>
    )
	
};

export default AuthContext;