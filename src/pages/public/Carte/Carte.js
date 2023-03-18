import React, { useEffect,useState } from 'react'
import {Container} from "react-bootstrap"
import { Fragment } from "react";

import Category from "../../../components/public/Carte/Category";
import CardListe from "../../../components/public/Carte/CardListe";
// import axios from 'axios';
import Title from '../../../components/public/Global/Title';
// import baseUrlProd from '../../../Api/baseUrl';
import { platservice } from '../../../_services/plats.services';

const Carte = () => {
  const [plats, setPlats] = useState()
  const [datas, setDatas] = useState(plats)
  const [repa, setRepa] = useState("")
  const [loading, setLoading] = useState(true)
  const [err, seterr] = useState("")

  useEffect(function (){
    platservice.getAllPlats().then((response) => {
      if(response.status !== 200){
        throw new Error("Désolé! pas de plats diponible")
      }
      
      const resultTab = response.data.data
      setPlats(resultTab)
      setDatas(resultTab)
      setLoading(false)
    }).catch(err=>{
      seterr(err.message)
      
      setLoading(false)

    })

  },[]);

  const showRepas = (repa)=>{
      if(!plats){
        throw new Error("pas de plats")
      }
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
            <CardListe datas={datas} loading={loading} err={err}/>

      </Container>
    </Fragment>
  );
}

export default Carte

// import React, { useState, useContext } from "react";
// import { Container } from "react-bootstrap";
// import { Fragment } from "react";

// import Category from "../../../components/public/Carte/Category";
// import CardListe from "../../../components/public/Carte/CardListe";
// import Title from "../../../components/public/Global/Title";
// import { categoryContext } from "../../../store/categoryContext";

// const Carte = () => {
//   const categoriesContext = useContext(categoryContext);

//   const [datas, setDatas] = useState(categoriesContext.allPlats);
//   const [repa, setRepa] = useState("");

//   const showRepas = (repa) => {
//     const mesReapas =
//       categoriesContext.allPlats &&
//       categoriesContext.allPlats.filter((plat) => {
//         return plat.name === repa;
//       });
//     setDatas([...mesReapas]);
//     setRepa(repa);
//   };

//   return (
//     <Fragment>
//       <Title title={repa ? repa : "Notre carte"} />
//       <Container>
//         <Category showRepas={showRepas} />
//         <CardListe datas={datas} />
//       </Container>
//     </Fragment>
//   );
// };

// export default Carte;
