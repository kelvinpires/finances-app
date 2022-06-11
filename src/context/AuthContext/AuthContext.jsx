import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../services/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const googleLogInRedirect = () => {
    return signInWithRedirect(auth, provider);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser(user);
      } else {
        logOut();
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, googleLogInRedirect, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
