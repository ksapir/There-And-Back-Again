const axios = require("axios")

// local
const URL_PREFIX = "http://localhost:3001"

// deployed
// created but nothing pushed to heroku  
// const URL_PREFIX = "https://there-and-back-end.herokuapp.com/"




const API = {

  // example front end route
  login: function (userData) {
    return axios.post(`${URL_PREFIX}/login`, userData)
  },

  allTrails: function() {
    return axios.get(`${URL_PREFIX}/api/trails`)
  },
}

export default API


