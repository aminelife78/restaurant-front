import Axios from "./caller.services";


// get all formules

let getAllformules = () => {
  return Axios.get("/api/v1/formules");
};

// get one category

let getOneFormule = (cid) => {
  return Axios.get(`/api/v1/formules/${cid}`);
};

// ajouter une categorie
let addFormule = (datas) => {
  return Axios.post(`/api/v1/formules`,datas)
}

// modifier Formule
let updateFormule = (cid,datas) => {
  return Axios.put(`/api/v1/formules/${cid}`,datas)
}


// delete one Formule
let deleteFormule = (cid) => {
  return Axios.delete(`/api/v1/formules/${cid}`)
}


export const formuleservice =   {
  getAllformules,getOneFormule,deleteFormule,updateFormule,addFormule
}