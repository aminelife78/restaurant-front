import React from 'react'

const ProfileDetail = ({user}) => {
  return (
    <>
      <p>role : {user.role} </p>
      <p>Prénom : {user.username} </p>
      <p>E-mail : {user.email} </p>
      <p>Téléphone : {user.phone} </p>
    </>
  )
}

export default ProfileDetail
