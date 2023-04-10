import React from 'react'
import { Container } from 'react-bootstrap'

const ErrorPage = () => {
  return (
    <Container className='vh-100 text-center pt-5'>
      <h2 className='fw-bold fs-1'>Page non trouvée</h2>
      <p>Nous n&apos;avons pas trouvé ce que vous cherchiez</p>

    </Container>
  )
}

export default ErrorPage