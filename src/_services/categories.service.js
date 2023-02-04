import Axios from "./caller.services";


// get all categories

let getAllCategories = () => {
  return Axios.get("/api/v1/categories");
};

// get one category

let getOneCategory = (cid) => {
  return Axios.get(`/api/v1/categories/${cid}`);
};

// ajouter une categorie
let addCategory = (datas) => {
  return Axios.post(`/api/v1/categories`,datas)
}

// modifier category
let updateCategory = (cid,datas) => {
  return Axios.put(`/api/v1/categories/${cid}`,datas)
}


// delete one category
let deleteCategory = (cid) => {
  return Axios.delete(`/api/v1/categories/${cid}`)
}


export const categorieService =   {
  getAllCategories,getOneCategory,deleteCategory,updateCategory,addCategory
}