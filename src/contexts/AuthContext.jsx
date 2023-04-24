import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { signInWithPopup, signOut, OAuthProvider } from 'firebase/auth';


import { auth } from '../firebase/firebase';
const AuthContext = createContext(undefined);
const microsoftProvider = new OAuthProvider("microsoft.com");
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = () => {
    setUser({
      name: 'TestUser',
    })
  }

  const loginWithMicrosoft = () => {
    signInWithPopup(auth, microsoftProvider)
      .then(result => {
        console.log("Microsoft Login Result", result);
      })
      .catch(error => {
        console.error("Microsoft result error", error);
      })
  }

  const logout = () => {
    signOut(auth);
    // setUser(null)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged changed", user)
      setUser(user ? user : null);
    })
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginWithMicrosoft,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }  