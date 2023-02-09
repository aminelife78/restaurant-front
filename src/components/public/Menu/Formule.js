import React,{useEffect,useState} from "react";
import { Card } from "react-bootstrap";
// import axios from "axios"
import MenuLists from "./MenuLists";
// import baseUrl from "../../../Api/baseUrl";
import "./menu.scss"
import { menuservice } from "../../../_services/menu.services";

const Formule = () => {
  const [datas, setDatas] = useState()
  useEffect(function (){
    menuservice.getAllmenu().then((response) => {
      const resultTab = response.data.data
      setDatas(resultTab)
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);

  
  return (
    <div >
    {
      datas && datas.map(data=>{
        return (
          <Card className="text-center border-0 bg-light box-shadow  mybox p-3 mb-5 bg-body rounded" key={data.id}>
            <Card.Header className="text-succes fs-2 fw-bold border-0 bg-white ">{data.name}</Card.Header>  
            <MenuLists   menus={data.name}/>
          </Card>
        )

      })
    }
    
    </div>
  );
};

export default Formule;