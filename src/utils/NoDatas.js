import React from 'react'
import { Alert } from 'react-bootstrap'

const NoDatas = () => {
  return (
    <>
    <Alert className='text-center'  variant="secondary">
          Oups! Pas de données trouver
    </Alert>
    </>
  )
}

export default NoDatas