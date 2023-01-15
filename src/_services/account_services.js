import jwt_decode from 'jwt-decode'

const saveToken = (token) => {
  localStorage.setItem("token", token);
};

const isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

const logout = () => {
  localStorage.removeItem("token");
};
let getToken = () => {
  return localStorage.getItem("token");
};


/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
  return jwt_decode(getToken())
}

export const accountService = {
  saveToken,
  isLogged,
  logout,
  getToken,
  getTokenInfo
};
