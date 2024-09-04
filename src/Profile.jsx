import React, { useContext } from 'react'
import { LoginContext } from './context/LoginContextProvider'

const Profile = () => {
    const {user} =useContext(LoginContext)
  return (
    <>
    <h1>Profile</h1>
    <h2> {user.userName}</h2>
    </>
  )
}

export default Profile