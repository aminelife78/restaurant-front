import React, { useEffect ,useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { accountService } from "../../../_services/account_services";
import ProfileDetail from "./ProfileDetail";
import ProfileReservation from "./ProfileReservation";
import "./profile.scss"
import { reservationservice } from "../../../_services/reservation.services";

const Profile = () => {
  const [user, setUser] = useState({});
  const [reservations,setReservations] = useState([])
  const [show, setShow] = useState(true)
  useEffect(() => {
    // recuperer le id de client stocket dans le token
    let { userNom,userEmail,userPhone,userRole} = accountService.getTokenInfo();
    // modifier le clients_id dans la réservation
    setUser({username:userNom, email:userEmail,phone:userPhone,role:userRole});
    reservationservice.getAllReservation().then(response=>{
      setReservations(response.data.data)
    })

  }, []);
  const userReservation = reservations.filter(resr=>{
    return resr.email === user.email
  })

  return (
    <Container fluid>
      <Row className="py-5">
        <Col
          sm="2" 
          className="sidbar text-center d-flex flex-column  border border-end-1 border-top-0 border-bottom-0 border-start-0  "
        >
          <h3>MON COMPTE</h3>
          <hr />
          <p className="text-primary"  onClick={()=>setShow(true)}>Details du compte</p>
          <p className="text-primary"  onClick={()=>setShow(false)}>mes reservation</p>
        </Col>
        <Col   className="article mx-5">
        {show?<ProfileDetail user={user}/> : <ProfileReservation userReservation={userReservation} />}
          
        </Col> 
      </Row>
    </Container>
  );
};

export default Profile;
