import React from 'react'
import { Button } from 'react-bootstrap'

const HeureReservation = ({datas,handleDatas,heure}) => {
  return (
   <>
   <Button
        
        onClick={handleDatas}
        name="heure"
        value={heure.time}
        type="button"
        className=" bg-outline-primary  me-2 mb-2 "
      >
        {heure.time.toString()}
    </Button>
   
   </>
  )
}

export default HeureReservation
