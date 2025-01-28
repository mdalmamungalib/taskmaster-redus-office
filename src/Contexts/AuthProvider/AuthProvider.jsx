import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../../Firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authInfo = { auth };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
