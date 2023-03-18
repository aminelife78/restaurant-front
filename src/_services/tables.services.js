import Axios from "./caller.services";


// get all Tables

let getAllTables = () => {
  return Axios.get(`/api/v1/tables`);
};

// get one Table

let getOneTable = (pid) => {
  return Axios.get(`/api/v1/tables/${pid}`);
};

// ajouter une Table
let addTable = (datas) => {
  return Axios.post(`/api/v1/tables`,datas)
}

// modifier Table
let updateTable = (pid,datas) => {
  return Axios.put(`/api/v1/tables/${pid}`,datas)
}


// delete one Table
let deleteTable = (pid) => {
  return Axios.delete(`/api/v1/Tables/${pid}`)
}


export const Tableservice =   {
  getAllTables,getOneTable,deleteTable,updateTable,addTable
}