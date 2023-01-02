import React,{useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import axios from "axios"
import MenuLists from "./MenuLists";
import baseUrl from "../../../Api/baseUrl";


const Formule = () => {
  const [datas, setDatas] = useState()
  useEffect(function (){
    axios.get(`${baseUrl}/api/v1/menus`).then((response) => {
      const resultTab = response.data.data
      setDatas(resultTab)
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);

  
  return (
    <div>
    {
      datas && datas.map(data=>{
        return (
          <Card className="text-center mb-4 border-0 bg-light" key={data.id}>
            <Card.Header className="text-primary fw-bold border-0 bg-white ">{data.name}</Card.Header>  
            <MenuLists   menus={data.name}/>
            <hr className="text-succes"/>
          </Card>
        )

      })
    }
    
    </div>
  );
};

export default Formule;