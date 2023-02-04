import Axios from "./caller.services";


// get all heure

let getAllHeures = () => {
  return Axios.get("/api/v1/horaires");
};

// get one category

let getOneheure = (cid) => {
  return Axios.get(`/api/v1/horaires/${cid}`);
};

// ajouter une categorie
let addheure = (datas) => {
  return Axios.post(`/api/v1/horaires`,datas)
}

// modifier heure
let updateheure = (cid,datas) => {
  return Axios.put(`/api/v1/horaires/${cid}`,datas)
}


// delete one heure
let deleteheure = (cid) => {
  return Axios.delete(`/api/v1/heures/${cid}`)
}


export const heureservice =   {
  getAllHeures,getOneheure,deleteheure,updateheure,addheure
}