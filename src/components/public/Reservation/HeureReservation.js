import React from 'react'
import { Button } from 'react-bootstrap'

const HeureReservation = ({handleHeure,heure}) => {
  return (
   <>
   <Button
        
        onClick={(e)=>{handleHeure(e.target.value)}}
        name="heure"
        value={heure}
        type="button"
        className=" bg-outline-primary  me-2 mb-2 "
      >
        {heure.toString()}
    </Button>
   
   </>
  )
}

export default HeureReservation
