import React, { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, signInUser, logout, resetPassword }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(UserContext);
};
