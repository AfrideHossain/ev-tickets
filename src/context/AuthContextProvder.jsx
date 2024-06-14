/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// import auth from firebase config
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// create context
export const AuthContext = createContext();

// auth providers
const authProviderGoogle = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  // states
  const [user, setUser] = useState();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  // Authentication functions
  // Create user
  const userRegisterWithPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login user
  const userLoginWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out user
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // sign in with google
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, authProviderGoogle);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserData) => {
      setLoading(true);
      setUser(currentUserData);
      if (currentUserData && currentUserData.email) {
        fetch(`${import.meta.env.VITE_BASE_URL}/jwtSign`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: currentUserData.displayName,
            email: currentUserData.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setRole(data.role);
            localStorage.setItem("token", data.token);
          });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // context values
  const contextValues = {
    user,
    role,
    loading,
    userRegisterWithPass,
    userLoginWithPass,
    userLogOut,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
