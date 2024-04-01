import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]= useState(true);


  const createUser = (email,password) =>{
    setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);
  }


  const logOut = () =>{
    setLoading(true);
   return signOut(auth);
  }

  useEffect(() =>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
      console.log('observing current user',currentUser);
    });
    return () =>{
      unSubscribe();
    }
  },[])

  const singInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth,GoogleAuthProvider);
  }


  const authInfo = {user,createUser,singInUser,logOut, signInGoogle,loading}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes ={
  children: PropTypes.node
}


/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 * ****/