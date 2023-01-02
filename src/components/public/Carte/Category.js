import React, { Fragment, useEffect,useState } from 'react'
import { Row,Button, Col } from 'react-bootstrap'
import "./Carte.scss"
import Roll from 'react-reveal/Roll';
import axios from 'axios';
import baseUrlProd from '../../../Api/baseUrl';


const Category = ({showRepas}) => {
  
  const [allRepas, setAllRepas] = useState()

  useEffect(function (){
    axios.get(`${baseUrlProd}/api/v1/categories`).then((response) => {
      const resultTab = response.data.data
      setAllRepas(resultTab)
            
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);
  return (
    <Row className='mt-3 mb-5'>
      <Col sm="12" className='d-flex justify-content-center '>
          <Roll>
          
          {
            allRepas && allRepas.map((repa,id)=>{
              return (
                <Fragment key={repa.id}>
                  <Button onClick={()=>showRepas(repa.name)} className='mx-2 ' variant='outline-succes '  size="md">{repa.name.charAt(0).toUpperCase() + repa.name.slice(1)}</Button>
                </Fragment>)
            })
          }
          
          </Roll>
        </Col>
    </Row>
  )
}

export default Category