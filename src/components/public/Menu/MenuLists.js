import React,{ Fragment, useEffect,useState} from "react";
import { Card } from 'react-bootstrap'
import { formuleservice } from "../../../_services/formule.services";


const MenuLists = ({menus}) => {
  const [formules, setFormules] = useState()
 

  useEffect(function (){
    formuleservice.getAllformules().then((response) => {
      const resultTab = response.data.data
      setFormules(resultTab)
      
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);

 
  const results = formules && formules.filter(formule=>{
    return (
      formule.name === menus
    )
  })
 

 
  
  return (
  <Fragment>
  {
    results && results.map(result =>{
      return (
        <Fragment key={result.id}>
        <Card.Body >
            <Card.Title className="text-secondary fw-bold fs-5">{result.title}</Card.Title>
            <Card.Text>
              {result.descreption} <span className="text-primary fw-bolder">{result.prix} €</span>
            </Card.Text>
          
        </Card.Body>
       
        </Fragment>
      )
    })
  }
  </Fragment>
)
    
}

export default MenuLists
