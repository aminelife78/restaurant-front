import Axios from "./caller.services";


// get all reservation

let getAllReservation = (date,nbrCouverts) => {
  if(date && date){
    return Axios.get(`/api/v1/reservations?date=${date}&nombreCouverts=${nbrCouverts}`);
  }else{
    return Axios.get(`/api/v1/reservations`);

  }
};

// get one category

let getOneReservation = (cid) => {
  return Axios.get(`/api/v1/reservations/${cid}`);
};

// ajouter une categorie
let addReservation = (datas) => {
  return Axios.post(`/api/v1/reservations`,datas)
}

// modifier Reservation
let updateReservation = (cid,datas) => {
  return Axios.put(`/api/v1/reservations/${cid}`,datas)
}


// delete one Reservation
let deleteReservation = (cid) => {
  return Axios.delete(`/api/v1/reservations/${cid}`)
}


export const reservationservice =   {
  getAllReservation,getOneReservation,deleteReservation,updateReservation,addReservation
}