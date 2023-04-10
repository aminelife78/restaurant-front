import Axios from "./caller.services";

// get all User

let getAllVisiteur = (date, heure) => {
  return Axios.get(`/api/v1/visiteur?date=${date}?heure=${heure}`);
};

// get one category

let getOneVisiteur = (cid) => {
  return Axios.get(`/api/v1/visiteur/${cid}`);
};

// ajouter une categorie
let addVisiteur = (datas) => {
  return Axios.post(`/api/v1/visiteur`, datas);
};

// modifier Visiteur
let updateVisiteur = (cid, datas) => {
  return Axios.put(`/api/v1/visiteur/${cid}`, datas);
};

// delete one Visiteur
let deleteVisiteur = (cid) => {
  return Axios.delete(`/api/v1/visiteur/${cid}`);
};

export const visiteurervice = {
  getAllVisiteur,
  getOneVisiteur,
  deleteVisiteur,
  updateVisiteur,
  addVisiteur,
};
