import React from 'react'
import Header from './components/header/Header'
import SignIn from './users/SignIn'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>

      <Routes>
        <Route path="profile" element={<Header />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App