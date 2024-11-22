import React from 'react'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSetting from './components/ProfileSetting';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import useAuth from './components/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/login';

function App() {

  const { isAuthenticated , logout ,login } = useAuth();

  return (
    <>
    <nav>

      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
      

    </nav>

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element ={<Profile/>} >
          <Route path='profileDetails' element={<ProfileDetails />} />
          <Route path='profileSetting' element={<ProfileSetting />} />
        </Route>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<ProtectedRoute isAuthenticated={ isAuthenticated }>
          <Profile />
        </ProtectedRoute>} />
      </Routes>
      <p>User is {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
    </Router>
    </>
  )
}

export default App ;