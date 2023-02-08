import React, { createContext, useState, useEffect } from "react";
import { categorieService } from "../_services/categories.service";
import { galerieservice } from "../_services/galerie.services";
import { platservice } from "../_services/plats.services";
import { menuservice } from "../_services/menu.services";
import { formuleservice } from "../_services/formule.services";
const categoryContext = createContext();

const ContexteCtegory = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allPlats, setAllPlats] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [allMenus, setAllMenus] = useState([]);
  const [allFormules, setAllFormules] = useState([]);
  const [loading, setLoading] = useState(true);

  // recuperer liste de categories
  const getCategories = ()=>{
    categorieService
      .getAllCategories()
      .then((response) => {
        const resultTab = response.data.data;
        setAllCategories(resultTab);
        setLoading(false);
      })
      .catch((err) => {
        console.log("il y a une erreur " + err);
        setLoading(true);
      });
  }
  useEffect(function () {
    getCategories()
  }, []);

  // recuperer liste de plats
  const getPlats = ()=>{
    platservice
    .getAllPlats()
    .then((response) => {
      const resultTab = response.data.data;
      setAllPlats(resultTab);
      setLoading(false);
    })
    .catch((err) => {
      console.log("il y a une erreur " + err);
      setLoading(true);
    });
  }
  useEffect(function () {
    getPlats()
  }, []);

  // recuperer image de galerie
const getGaleries = ()=>{
  galerieservice
  .getAllGaleries()
  .then((response) => {
    const resultTab = response.data.data;
    setPhotos(resultTab);
    setLoading(false);
  })
  .catch((err) => {
    console.log("il y a une erreur " + err);
    setLoading(true);
  });
}
  useEffect(function () {
    getGaleries()
  }, []);

  // recuperer name de menus
  
  const getMenu = ()=>{
    menuservice
    .getAllmenu()
    .then((response) => {
      const resultTab = response.data.data;
      setAllMenus(resultTab);
      setLoading(false);
    })
    .catch((err) => {
      console.log("il y a une erreur " + err);
      setLoading(true);
    });
  }
  useEffect(function () {
    getMenu()
  }, []);

  // recupetrer formules
  const getFormules = ()=>{
    formuleservice
    .getAllformules()
    .then((response) => {
      const resultTab = response.data.data;
      setAllFormules(resultTab);
      setLoading(false);
    })
    .catch((err) => {
      console.log("il y a une erreur " + err);
      setLoading(true);
    });
  }
  useEffect(function () {
    getFormules()
  }, []);

  return (
    <categoryContext.Provider
      value={{
        getCategories,
        allCategories,
        loading,
        setAllCategories,
        getPlats,
        allPlats,
        setAllPlats,
        getGaleries,
        photos,
        setPhotos,
        getMenu,
        allMenus,
        setAllMenus,
        getFormules,
        allFormules,
        setAllFormules,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export { categoryContext, ContexteCtegory };
