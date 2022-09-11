import React from 'react'
import Header from './components/header/Header'
import SignIn from './users/SignIn'
import { Routes, Route } from "react-router-dom"
//import ProtectedRoute from './routes/ProtectedRoute'
import FriendRequest from './components/friendrequest/FriendRequest'
import Navbar from './components/appbar/mainNavbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/profile" element={<Header />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/friends" element={<FriendRequest />} />
      </Routes>
    </>
  )
}

export default App