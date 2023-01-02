import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import footer from '../../../images/footer.jpg'
import "./Footer.scss"
import axios from "axios"
import baseUrl from '../../../Api/baseUrl';


function Footer() {
  const [heures, setHeures] = useState()
  useEffect(function (){
    axios.get(`${baseUrl}/api/v1/horaires`).then((response) => {
      const resultTab = response.data.data
      setHeures(resultTab)   
      
    }).catch(err=>{
      console.log("il y a une erreur " + err)
    })

  },[]);

  console.log(heures)

  return (
    <Card className="bg-dark text-white footer-container ">
      <Card.Img src={footer} alt="footer" />
      
        <Card.Title>Footer</Card.Title>
      <Card.ImgOverlay className='d-flex flex-column'>
        <Card.Title className='fw-bolder fs-3 text-white '>Nos horaires d ouverture</Card.Title>
        <table className="table table-borderless  text-white w-25">
            {
              heures && heures.map(heure=>{
                return (
                  <tbody className='fs-6 fw-bold' key={heure.id}>
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
          <Card.Text className='text-center'>Copyright ©2023 Tous droits réservés | Ce modèle est fait par Amine</Card.Text>

      </Card.ImgOverlay>
      

    </Card>
  );
}

export default Footer;