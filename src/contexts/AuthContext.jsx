import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const AuthContext = createContext(undefined)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()

  const login = () => {
    setUser({
      name: 'TestUser',
    })
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }  