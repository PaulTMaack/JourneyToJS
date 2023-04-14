import { useContext, useEffect, useState } from 'react';

// import logo from './logo.svg';
import './App.css';

import AddItemControl from './components/AddItemControl/AddItemControl';
import ToDoList from './components/ToDoList/ToDoList';
import useListData from './hooks/useListData'
import ToDoTitle from './components/ToDoTitle/ToDoTitle';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';

import LoginPage from './pages/LoginPage';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  // const [user, setUser] = useState()
  const homeRouteElement = (
    <ProtectedRoute >
      <HomePage />
    </ProtectedRoute>
  )


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route index element={homeRouteElement} />
          <Route path='login' element={<LoginPage />} />
          {/* <Route path='login' element={<LoginPage user={user} setUser={setUser} />} /> */}
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );

}

function HomePage({

}) {
  const {
    addItem,
    clearList,
    listData,
    toggleCheck,
    deleteItem,
  } = useListData();

  return (
    <div className='App'>
      <ToDoTitle></ToDoTitle>
      <Link to={'/login'}>Login Page</Link>
      <AddItemControl
        addItem={addItem}
      />
      <ToDoList
        listData={listData}
        clearList={clearList}
        toggleCheck={toggleCheck}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
