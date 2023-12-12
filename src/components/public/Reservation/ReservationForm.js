import React, { useState, useEffect, Fragment } from "react";
import "./Reservation.scss";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import { reservationservice } from "../../../_services/reservation.services";
import { FaUtensils, FaRegCalendarAlt } from "react-icons/fa";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";
import { Userservice } from "../../../_services/user.services";
const moment = require("moment");

const ReservationForm = () => {
  const navigate = useNavigate();

  // etats initiale des données
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nombreCouverts, setNombreCouverts] = useState("");
  const [date, setDate] = useState("");
  const [heures, setHeures] = useState("");
  const [allergies, setAllergies] = useState("");

  // etats des erreures
  const [errs, setErrs] = useState("");

  // recuperer heure disponible pour une date et nombre de couverts selectionner
  const [heureDispo, setHeureDispo] = useState([]);

  const recupHeureDispo = (heure, nbrCvrts) => {
    reservationservice.getAllReservation(heure, nbrCvrts).then((res) => {
      const heureDispos = res.data.availableHours;
      if (heureDispos) {
        setHeureDispo([...heureDispos]);
      }
    });
  };
  useEffect(() => {
    recupHeureDispo(date, nombreCouverts);
  }, [date, nombreCouverts]);

  

  // recupérer les donnée de client  s'il est conecté
  useEffect(() => {
    if (accountService.isLogged()) {
      // recuperer le id de client connecter
      let { userId } =
        accountService.getTokenInfo();

        // recuperer les données de client connecter
            Userservice.getOneUser(userId).then((res)=>{
              const userData = res.data.data;
              setNom(userData[0].username);
              setEmail(userData[0].email);
              setPhone(userData[0].phone);
              setNombreCouverts(userData[0].nombre_convives);
              setAllergies(userData[0].allergies);
            })
              
            
          
          
    
    
    }
  }, []);

  // envoyé les donnée à la base de données
  const onSubmit = (e) => {
    e.preventDefault();
    if (date >= moment().format("YYYY-MM-DD")) {
      reservationservice
        .addReservation({
          nom: nom,
          email: email,
          phone: phone,
          nombre_couverts: nombreCouverts,
          date: date,
          heure: heures,
          allergies: allergies,
        })
        .then((res) => {
          setErrs("");
          navigate("/confirmation");
        })
        .catch((err) => {
          console.log(err);
          err.response.data.message
            ? setErrs(err.response.data.message)
            : setErrs(err.response.data.errors[0].msg);
        });
    } else {
      setErrs(
        "Oups! la date de réservation est incorrecte. Veuillez la modifier."
      );
    }
  };

  return (
    <>
      {heureDispo.length > 0 ? (
        ""
      ) : (
        <p className="saisi text-center text-succes fw-bold pb-2">
          veuillez saisir la date et le nombre de couverts pour voir les
          disponibilité
        </p>
      )}
      <Form onSubmit={onSubmit} className="w-75 mx-auto">
        {errs ? <ErrorFormValidation errs={errs} /> : ""}
        <Row>
          <Form.Group
            as={Col}
            md="6"
            className="mb-2"
            controlId="validationCustomUsername"
          >
            <InputGroup hasValidation>
              <InputGroup.Text>
                <FaUtensils />
              </InputGroup.Text>
              <Form.Select
                onChange={(e) => {
                  setNombreCouverts(e.target.value);
                }}
                name="nombre_couverts"
                value={nombreCouverts}
                aria-label="Default select example"
                required
              >
                <option value="">Nombre de couverts</option>
                <option value={1}>1 couverts</option>
                <option value={2}>2 couverts</option>
                <option value={3}>3 couverts</option>
                <option value={4}>4 couverts</option>
                <option value={5}>5 couverts</option>
                <option value={6}>6 couverts</option>
                <option value={7}>7 couverts</option>
                <option value={8}>8 couverts</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text>
                <FaRegCalendarAlt />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                name="date"
                value={date}
                type="date"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="pt-4  ">
          <p>Midi</p>
          <Col>
            {heureDispo &&
              heureDispo
                .filter((heure) => {
                  const heureEnNombre = parseInt(heure.split(" ")[0]); // Extrait l'heure en nombre
                  return heureEnNombre < 15;
                })
                .map((heure, idx) => {
                  return (
                    <Button
                      key={idx}
                      onClick={(e) => {
                        setHeures(e.target.value);
                      }}
                      name="heure"
                      value={heure}
                      type="button"
                      className=" bg-outline-primary  me-2 mb-2 "
                    >
                      {heure.toString()}
                    </Button>
                  );
                })}
          </Col>
        </Row>
        <Row className="pt-4  ">
          <p>Soir</p>
          <Col>
            {heureDispo &&
              heureDispo
                .filter((heure) => {
                  const heureEnNombre = parseInt(heure.split(" ")[0]); // Extrait l'heure en nombre
                  return heureEnNombre > 15;
                })
                .map((heure, idx) => {
                  return (
                    <Button
                      key={idx}
                      onClick={(e) => {
                        setHeures(e.target.value);
                      }}
                      name="heure"
                      value={heure}
                      type="button"
                      className=" bg-outline-primary  me-2 mb-2 "
                    >
                      {heure.toString()}
                    </Button>
                  );
                })}
          </Col>
        </Row>

        {heureDispo.length > 0 && !accountService.isLogged() && (
          <>
            <Row className="mb-3 mt-3">
              <Form.Group as={Col} controlId="formGridNom">
                <Form.Control
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                  name="nom"
                  value={nom}
                  type="text"
                  placeholder="Enter Nom"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  value={email}
                  type="email"
                  placeholder="email"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Control
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name="phone"
                  value={phone}
                  type="text"
                  placeholder="Enter Phone"
                />
              </Form.Group>
            </Row>
            <Row className="my-2">
              <Col>
                <Form.Control
                  as="textarea"
                  type="textarea"
                  onChange={(e) => {
                    setAllergies(e.target.value);
                  }}
                  name="allergies"
                  value={allergies || ""}
                  placeholder="Enter allergies"
                />
              </Col>
            </Row>
          </>
        )}

        {heureDispo.length > 0 && (
          <Button className="mt-4 " type="submit">
            Faire une demande de réservation
          </Button>
        )}
      </Form>
    </>
  );
};

export default ReservationForm;
