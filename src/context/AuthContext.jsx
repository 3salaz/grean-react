import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import {auth} from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // google sign In
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  // sign in
  const signIn = (email, password) => {
    console.log(signInWithEmailAndPassword(auth, email, password))
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logOut,
        signIn,
        googleSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
