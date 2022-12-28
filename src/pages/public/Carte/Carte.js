import React, { useEffect,useState } from 'react'
import {Container} from "react-bootstrap"
import { Fragment } from "react";

import Category from "../../../components/public/Carte/Category";
import CardListe from "../../../components/public/Carte/CardListe";
import axios from 'axios';
import Title from '../../../components/public/Global/Title';


const Carte = () => {
  const [plats, setPlats] = useState()
  const [datas, setDatas] = useState(plats)
  const [repa, setRepa] = useState("")
 

  useEffect(function (){
    axios.get("http://localhost:5000/api/v1/plats").then((response) => {
      const resultTab = response.data.data
      setPlats(resultTab)   
      setDatas(resultTab) 
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);


  const showRepas = (repa)=>{
    
       const mesReapas = plats && plats.filter(plat=>{
        return plat.name === repa
      })
      setDatas([...mesReapas])
      setRepa(repa)
    
  }

   
  return (
    <Fragment>
      <Title title={repa?repa:"Notre carte"} />
      <Container >
            
            <Category  showRepas={showRepas} />
            <CardListe datas={datas}/>    

      </Container>
    </Fragment>
  );
}

export default Carte