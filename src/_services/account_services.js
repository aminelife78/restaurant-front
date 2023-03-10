import Axios from "./caller.services";
import jwt_decode from "jwt-decode";

/**
 * Connexion vers l'API
 * @param {object} login
 *
 * @returns {Promise}
 */
let login = (login) => {
  return Axios.post("/api/v1/auth/login", login);
};

/**
 * inscreption vers l'API
 * @param {object} dataUsers
 *
 * @returns {Promise}
 */
let register = (dataUsers) => {
  return Axios.post("/api/v1/auth/register", dataUsers);
};

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
};

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
  return jwt_decode(getToken());
};

// Déclaration des serivces pour import
export const accountService = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
  getTokenInfo,
  register,
};
