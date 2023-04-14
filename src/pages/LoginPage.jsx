import React, { useContext } from 'react';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
const LoginPage = ({
}) => {

  const {
    login,
    logout,
    user
  } = useContext(AuthContext)


  return (
    <div className="LoginPage">
      <h1>I'm the login page. </h1>
      {
        user && (
          <Navigate to='/' />
        )
      }
      {
        user ?
          (<button onClick={logout}>
            Logout
          </button>)
          :
          (<button onClick={login}>
            Login
          </button>)
      }
    </div>);
}



export default LoginPage;