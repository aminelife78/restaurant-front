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
  useEffect(function () {
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
  }, []);

  // recuperer liste de plats
  useEffect(function () {
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
  }, []);

  // recuperer image de galerie

  useEffect(function () {
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
  }, []);

  // recuperer name de menus
  useEffect(function () {
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
  }, []);

  // recupetrer formules
  useEffect(function () {
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
  }, []);

  return (
    <categoryContext.Provider
      value={{
        allCategories,
        loading,
        setAllCategories,
        allPlats,
        setAllPlats,
        photos,
        setPhotos,
        allMenus,
        setAllMenus,
        allFormules,
        setAllFormules,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export { categoryContext, ContexteCtegory };
