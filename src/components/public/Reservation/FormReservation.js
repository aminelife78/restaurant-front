import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import { reservationservice } from "../../../_services/reservation.services";
import { FaUtensils, FaRegCalendarAlt } from "react-icons/fa";
import ErrorFormValidation from "../../../utils/ErrorFormValidation";
import { Tableservice } from "../../../_services/tables.services";
import ReservationUsers from "./ReservationUsers";
import HeureReservation from "./HeureReservation";
const moment = require('moment');


const FormReservation = () => {
  const navigate = useNavigate();

  // etat formulaire reservation
  const [datas, setDatas] = useState({
    nom: "",
    phone: "",
    email: "",
    nombre_couverts: 2,
    date: Date(),
    heure: "",
    allergies: "",
  });

  const [errs, setErrs] = useState("");

  // etat table disponible
  const [tables, setTables] = useState([]);
  // etatnombre couverts disponible
  const [reservationDispo, setReservationDispo] = useState([]);

  const mydate = datas.date;
  const myheure = datas.heure;

  // recuperer les donnée stocket dans les chant de formulaire
  const handleDatas = (e) => {
    if (!e.target.value) {
      setErrs("");
    }
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  // recupérer le nombre de couverts disponible pour une date et heure choisi par le client ou visiteur
  useEffect(
    function () {
      reservationservice
        .getAllReservation(mydate, myheure)
        .then((response) => {
          const resultTab = response.data.couvertDispo;
          setReservationDispo(resultTab);
        })
        .catch((err) => {
          console.log("il y a une erreur " + err);
        });
    },
    [mydate, myheure]
  );

  // recupéré les heures et nombre max de convives
  useEffect(() => {
    Tableservice.getAllTables().then((response) => {
      setTables(response.data.data);
    });
  }, []);

  const heures_midi = tables.filter((table) => {
    return table.temps === "midi" ;
  });

  const heures_soir = tables.filter((table) => {
    return table.temps === "soir";
  });

  // recupérer les donnée de client conecté
  useEffect(() => {
    if (accountService.isLogged()) {
      let { userPhone, userEmail, userNom, userConvives, userAllergies } =
        accountService.getTokenInfo();
      setDatas({
        nom: userNom,
        phone: userPhone,
        email: userEmail,
        nombre_couverts: userConvives,
        allergies: userAllergies,
        date: "",
        heure: "",
      });
    }
  }, []);

  // envoyé les donnée dans la base de données
  const onSubmit = (e) => {
    e.preventDefault();
      reservationservice
      .addReservation(datas)
      .then((res) => {
        
        setErrs("");
        navigate("/");
      })
      .catch((err) => {
        err.response.data.message
          ? setErrs(err.response.data.message)
          : setErrs(err.response.data.message);
      });
  };

  return (
    <>
      <p className="text-center fw-bold text-muted pb-2">
        veuillez saisir la date et l&apos;heure pour voir les disponibilité
      </p>
      <Form onSubmit={onSubmit} className="w-75 mx-auto">
        {mydate && myheure && reservationDispo >= 0  &&  
          <Alert variant="secondary" className="text-center">
            <span className="fw-bold">{reservationDispo}</span> couverts
            disponible pour le  { moment(mydate).format('DD-MM-YYYY')} à {myheure}
          </Alert>
        }
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
                onChange={handleDatas}
                name="nombre_couverts"
                value={datas.nombre_couverts}
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
                onChange={handleDatas}
                name="date"
                value={ datas.date}
                type="date"
                required
                min="08-03-2023"
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
            {heures_midi.map((heure, idx) => {
              return (
                <Fragment key={idx}>
                  <HeureReservation
                    datas={datas}
                    handleDatas={handleDatas}
                    heure={heure}
                  />
                </Fragment>
              );
            })}
          </Col>
        </Row>
        <Row className="py-4 ">
          <p>Soir</p>
          <Col>
            {heures_soir.map((heure, idx) => {
              return (
                <Fragment key={idx}>
                  <HeureReservation
                    datas={datas}
                    handleDatas={handleDatas}
                    heure={heure}
                  />
                </Fragment>
              );
            })}
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Form.Control
              as="textarea"
              type="textarea"
              onChange={handleDatas}
              name="allergies"
              value={datas.allergies || ""}
              placeholder="Enter allergies"
            />
          </Col>
        </Row>

      
        {reservationDispo >= datas.nombre_couverts &&
          !accountService.isLogged() && (
            <ReservationUsers datas={datas} handleDatas={handleDatas} />
          )}
          {reservationDispo >= datas.nombre_couverts ? (
            <Button className="mt-4 " type="submit">
            Faire une demande de réservation
            </Button>
          ) : (
            <Button className="mt-4 " type="submit" disabled>
              Faire une demande de réservation
            </Button>
          )}
      </Form>
    </>
  );
};

export default FormReservation;
