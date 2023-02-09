import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import footer from '../../../images/footer.jpg'
import "./Footer.scss"
// import axios from "axios"
// import baseUrl from '../../../Api/baseUrl';
import { heureservice } from '../../../_services/heure.services';


function Footer() {
  const [heures, setHeures] = useState()
  useEffect(function (){
    heureservice.getAllHeures().then((response) => {
      const resultTab = response.data.data
      setHeures(resultTab)   
      
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);



  return (
    <Card className="bg-dark text-white footer-container   ">
      <Card.Img src={footer} alt="footer" />
      
        
      <Card.ImgOverlay className='d-flex flex-column '>
        <Card.Title className='fw-bolder fs-3 text-white m-0 w-50 '>Nos horaires d ouverture</Card.Title>
        <table className="table table-borderless  text-white w-25">
            {
              heures && heures.map(heure=>{
                return (
                  <tbody className='fs-6 fw-bold m-0' key={heure.id}>
                      <tr >
                        <td>{heure.jours}</td>
                        <td className='text-secondary  '>{heure.heure_matin?heure.heure_matin:heure.heure_soir}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className='text-secondary '>{heure.heure_matin?heure.heure_soir:""}</td>
                      </tr>
                      
                  </tbody>
                )
              })
            }
          </table>
          <Card.Text className='text-center footer-position'>Copyright ©2023 Tous droits réservés | Ce modèle est fait par Amine</Card.Text>

      </Card.ImgOverlay>
      

    </Card>
  );
}

export default Footer;