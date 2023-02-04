import Axios from "./caller.services";


// get all Plats

let getAllPlats = () => {
  return Axios.get(`/api/v1/plats`);
};

// get one plat

let getOnePlat = (pid) => {
  return Axios.get(`/api/v1/plats/${pid}`);
};

// ajouter une plat
let addPlat = (datas) => {
  return Axios.post(`/api/v1/plats`,datas)
}

// modifier Plat
let updatePlat = (pid,datas) => {
  return Axios.put(`/api/v1/plats/${pid}`,datas)
}


// delete one Plat
let deletePlat = (pid) => {
  return Axios.delete(`/api/v1/plats/${pid}`)
}


export const platservice =   {
  getAllPlats,getOnePlat,deletePlat,updatePlat,addPlat
}