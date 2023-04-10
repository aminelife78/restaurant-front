import Axios from "./caller.services";


// get all User

let getAllUsers = (date,heure) => {
  return Axios.get(`/api/v1/users?date=${date}?heure=${heure}`);
};

// get one category

let getOneUser = (cid) => {
  return Axios.get(`/api/v1/users/${cid}`);
};

// ajouter une categorie
let addUser = (datas) => {
  return Axios.post(`/api/v1/users`,datas)
}

// modifier User
let updateUser = (cid,datas) => {
  return Axios.put(`/api/v1/users/${cid}`,datas)
}


// delete one User
let deleteUser = (cid) => {
  return Axios.delete(`/api/v1/Users/${cid}`)
}


export const Userservice =   {
  getAllUsers,getOneUser,deleteUser,updateUser,addUser
}