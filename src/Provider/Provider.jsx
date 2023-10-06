import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const Provider = ({children}) => {
    const [user, setUser] = useState(null)

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () =>{
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser , profile)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unSubscribe
    }, [])

    const authUser = {user, signUpUser, updateUserProfile, signInUser, googleSignIn, logoutUser}
    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};

export default Provider;