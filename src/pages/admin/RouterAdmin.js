import React from "react";
import { Routes, Route } from "react-router-dom";
import Acarte from "./Acarte/Acarte";
import Agalerie from "./Agaleries/Agalerie";
import Ahoraires from "./Ahoraires/Ahoraires";
import Amenu from "./Amenu/Amenu";
import Areservation from "./Areservation/Areservation";
import Ausers from "./Ausers/Ausers";
import Acategories from "./Categories/Acategories";
import Dashboard from "./Dashboard/Dashboard";
import ErrorPage from "../../utils/ErrorPage.js";
import Alayout from "./Alayout";
import Cliste from "./Categories/Cliste";
import Cadd from "./Categories/Cadd";
import Cupdate from "./Categories/Cupdate";
import CrListe from "./Acarte/CrListe";
import CrAdd from "./Acarte/CrAdd";
import CrUpdate from "./Acarte/CrUpdate";
import Gliste from "./Agaleries/Gliste";
import Gadd from "./Agaleries/Gadd";
import Gupdate from "./Agaleries/Gupdate";
import Hliste from "./Ahoraires/Hliste";
import Hupdate from "./Ahoraires/Hupdate";
import Mliste from "./Amenu/Mliste";
import Madd from "./Amenu/Madd";
import Mupdate from "./Amenu/Mupdate";
import Aformule from "./Aformules/Aformule";
import Fliste from "./Aformules/Fliste";
import Fadd from "./Aformules/Fadd";
import Fupdate from "./Aformules/Fupdate";
import Tliste from "./Atables/Tliste";
import Tadd from "./Atables/Tadd";
import Tupdate from "./Atables/Tupdate";
import Atables from "./Atables/Atables";

const RouterAdmin = () => {
  return (
    <>
      <Routes>
        <Route element={<Alayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Acategories />}>
            <Route index element={<Cliste />} />
            <Route path="liste" element={<Cliste />} />
            <Route path="add" element={<Cadd />} />
            <Route path="update/:id" element={<Cupdate />} />
          </Route>
          <Route path="/carte" element={<Acarte />}>
            <Route index element={<CrListe />} />
            <Route path="liste" element={<CrListe />} />
            <Route path="add" element={<CrAdd />} />
            <Route path="update/:id" element={<CrUpdate />} />
          </Route>
          <Route path="/menu" element={<Amenu />}>
            <Route index element={<Mliste />} />
            <Route path="liste" element={<Mliste />} />
            <Route path="add" element={<Madd />} />
            <Route path="update/:id" element={<Mupdate />} />
          </Route>
          <Route path="/formule" element={<Aformule />}>
            <Route index element={<Fliste />} />
            <Route path="liste" element={<Fliste />} />
            <Route path="add" element={<Fadd />} />
            <Route path="update/:id" element={<Fupdate />} />
          </Route>
          <Route path="/galerie" element={<Agalerie />}>
            <Route index element={<Gliste />} />
            <Route path="liste" element={<Gliste />} />
            <Route path="add" element={<Gadd />} />
            <Route path="update/:id" element={<Gupdate />} />
          </Route>
          <Route path="/horaires" element={<Ahoraires />}>
            <Route index element={<Hliste />} />
            <Route path="liste" element={<Hliste />} />
            <Route path="update/:id" element={<Hupdate />} />
          </Route>
          <Route path="/tables" element={<Atables />}>
            <Route index element={<Tliste />} />
            <Route path="liste" element={<Tliste />} />
            <Route path="add" element={<Tadd />} />
            <Route path="update/:id" element={<Tupdate />} />
          </Route>
          <Route path="/reservation" element={<Areservation />} />
          <Route path="/users" element={<Ausers />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterAdmin;
