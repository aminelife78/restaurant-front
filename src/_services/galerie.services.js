import Axios from "./caller.services";


// get all galeries

let getAllGaleries = () => {
  return Axios.get(`/api/v1/galerie`);
};

// get one plat

let getOneGalerie = (pid) => {
  return Axios.get(`/api/v1/galerie/${pid}`);
};

// ajouter une Galerie
let addGalerie = (datas) => {
  return Axios.post(`/api/v1/galerie`,datas)
}

// modifier Galerie
let updateGalerie = (pid,datas) => {
  return Axios.put(`/api/v1/galerie/${pid}`,datas)
}


// delete one Galerie
let deleteGalerie = (pid) => {
  return Axios.delete(`/api/v1/galerie/${pid}`)
}


export const galerieservice =   {
  getAllGaleries,getOneGalerie,deleteGalerie,updateGalerie,addGalerie
}