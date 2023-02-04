import Axios from "./caller.services";


// get all menu

let getAllmenu = () => {
  return Axios.get("/api/v1/menus");
};

// get one category

let getOneMenu = (cid) => {
  return Axios.get(`/api/v1/menus/${cid}`);
};

// ajouter une categorie
let addMenus = (datas) => {
  return Axios.post(`/api/v1/menus`,datas)
}

// modifier Menu
let updateMenu = (cid,datas) => {
  return Axios.put(`/api/v1/menus/${cid}`,datas)
}


// delete one Menu
let deleteMenu = (cid) => {
  return Axios.delete(`/api/v1/menus/${cid}`)
}


export const menuservice =   {
  getAllmenu,getOneMenu,deleteMenu,updateMenu,addMenus
}