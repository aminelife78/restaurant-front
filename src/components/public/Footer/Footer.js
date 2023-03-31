import { useState, useEffect } from "react";
import "./Footer.scss";
import { heureservice } from "../../../_services/heure.services";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const [heures, setHeures] = useState();
  const [loading, setLoading] = useState(true);
  

  const getHoraire = async () => {
    const response = await heureservice.getAllHeures();
    try {
      
        const resultTab = response.data.data;
        setHeures(resultTab);
        setLoading(false);
    
    
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  useEffect(function () {
    getHoraire();
  }, []);
  

  return (
    <Container fluid className="footer">
      <Row className="  bg-dark d-flex justify-content-center text-white   ">
        <Col md={4} className="d-flex flex-column pt-4 text-center  ">
          <h3 className="fw-bolder fs-2  text-center text-capitalize text-white d-flex flex-column pt-4">
            horaires d&apos;ouverture
          </h3>
          <div className="separator mx-auto"></div>

          {loading === false ? (
            heures ? (
              heures.map((heure) => {
                return (
                  <table
                    className="table table-borderless text-white m-0 "
                    key={heure.id}
                  >
                    <tbody className=" fw-bold m-0">
                      <tr>
                        <td className="px-0">{heure.jours}</td>
                        <td className="text-succes px-0 ">
                          {heure.heure_matin
                            ? heure.heure_matin
                            : heure.heure_soir}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="text-succes w-50 p-0 ">
                          {heure.heure_matin ? heure.heure_soir : ""}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })
            ) : (
              <h4 className="text-center text-danger py-4">Désolé! horraire non disponible</h4>
            )
          ) : (
            <Spinner
              animation="border"
              className="mx-auto  my-5"
              variant="primary"
            />
          )}
        </Col>
        <Col md={4} className="pt-4  text-center ">
          <h3 className="mt-4 fs-2 fw-bold">Contact</h3>
          <p>Email : amine@mail.com</p>
          <p>Phone : +33 (0) 000 0000 001</p>
          <p>Fax : +33 (0) 000 0000 001</p>
          <h3>Adresse</h3>
          <p className="mb-1">1234 Avenue Name</p>
          <p>City, AA 99999</p>
        </Col>
        <Col md={4} className="pt-4 pb-4 text-center ">
          <h3 className="mt-4 fs-2 fw-bold">Suivre Nous</h3>
          <a href="http://facebook.com" className="text-white  fs-1">
            <FaFacebook />
          </a>
          <a href="http://instagram.com" className="text-white fs-1 mx-3">
            <FaInstagram />
          </a>
          <a href="http://youtube.com" className="text-white fs-1">
            <FaYoutube />
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="px-0">
          <h5 className="text-center  footer-position ">
            Copyright ©2023 Tous droits réservés | Ce modèle est fait par Mohamed
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
