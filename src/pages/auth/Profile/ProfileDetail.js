import { useEffect, useState } from 'react';
import ModalProfile from './ModalProfile';
import { Userservice } from '../../../_services/user.services';
import { Button } from 'react-bootstrap';

const ProfileDetail = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState(null); // Utilisez null comme valeur initiale

  const handleShow = () => {
    setShowForm(!showForm);
  };
  const getUserData = async (cid) => {
    try {
      if(cid){
        const response = await Userservice.getOneUser(cid);
        const userData = response.data.data;
        setUserData(userData);
      }
    
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
    }
  };

  useEffect(() => {
  
    getUserData(user.id);
  }, [user.id]);

  console.log(userData)

  return (
    <>
      {userData ? ( // Vérifiez si userData est défini avant d'accéder à ses propriétés
        <>
          <p>Role : {userData[0].role}</p>
          <p>Prénom : {userData[0].username}</p>
          <p>E-mail : {userData[0].email}</p>
          <p>Téléphone : {userData[0].phone}</p>
          <p>Nombre Convive : {userData[0].nombre_convives}</p>
          <p>Allergies : {userData[0].allergies}</p>

          <Button onClick={handleShow} className='btn btn-success text-white'>Modifier</Button>
          {showForm && <ModalProfile handleShow={handleShow} user={userData} id={user.id} getUserData={getUserData} />}
        </>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </>
  );
};

export default ProfileDetail;
