import React,{useEffect,useState} from "react";
import { Card, Spinner } from "react-bootstrap";
// import axios from "axios"
import MenuLists from "./MenuLists";
// import baseUrl from "../../../Api/baseUrl";
import "./menu.scss"
import { menuservice } from "../../../_services/menu.services";

const Formule = () => {
  const [datas, setDatas] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(function (){
    menuservice.getAllmenu().then((response) => {
      const resultTab = response.data.data
      setDatas(resultTab)
      setLoading(false)
    }).catch(err=>{
      console.log("il y a une erreur " + err)
      setLoading(false)
    })

  },[]);

  
  return (
    <div  className="animate__animated animate__pulse">
    {
      loading===false?(
      datas?( datas.map(data=>{
        return (
          <Card className="text-center border-0 bg-light box-shadow  mybox p-3 mb-5 bg-body rounded" key={data.id}>
            <Card.Header className="text-succes fs-2 fw-bold border-0 bg-white ">{data.name}</Card.Header>  
            <MenuLists   menus={data.name}/>
          </Card>
        )

      })):<h4 className="text-center text-dark">Désolé! pas de formule</h4>):(  <Spinner
        animation="border"
        className="mx-auto  my-5"
        variant="primary"
      />)
    }
    
    </div>
  );
};

export default Formule;