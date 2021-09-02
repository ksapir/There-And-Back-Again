const axios = require("axios");
// local
const URL_PREFIX = "http://localhost:3001";

// deployed
// created but nothing pushed to heroku
// const URL_PREFIX = "https://there-and-back-end.herokuapp.com/"

const API = {
  login: function (userData) {
    return axios.post(`${URL_PREFIX}/api/auth`, userData);
  },
  signup: function (userData) {
    return axios.post(`${URL_PREFIX}/api/users`, userData);
  },
  getProfile: function (token, userId) {
    return axios.get(`${URL_PREFIX}/api/users/${userId}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
  },
  allTrails: function () {
    return axios.get(`${URL_PREFIX}/api/trails`);
  },

  allLotr: function () {
    return axios.get(`${URL_PREFIX}/api/journey/lotr`);
  },

  logMiles: function (miles, token) {
    return axios.put(`${URL_PREFIX}/api/users`, {
     
      userMiles: miles
   
    },{ headers: {
      authorization: `bearer ${token}`,
    },}
    );
  },

  trailLocation: function (location) {
    return axios.get(`${URL_PREFIX}/api/trails/${location}`);
  } 
};

export default API;
