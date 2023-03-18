import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorFormValidation = ({errs}) => {
  return (
    
      <Alert className="pb-4 text-center" variant="danger">{errs}</Alert>
    
  )
}

export default ErrorFormValidation

