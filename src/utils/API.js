const axios = require("axios")
// local
const URL_PREFIX = "http://localhost:3001"

// deployed
// created but nothing pushed to heroku  
// const URL_PREFIX = "https://there-and-back-end.herokuapp.com/"

const API = {
  login: function (userData) {
    return axios.post(`${URL_PREFIX}/api/auth`, userData)
  },
  signup: function (userData) {
    return axios.post(`${URL_PREFIX}/api/users`, userData)
  },
  getProfile: function (token) {
    return axios.get(`${URL_PREFIX}/user`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
},

  allTrails: function() {
    return axios.get(`${URL_PREFIX}/api/trails`)
  },

  allLotr: function() {
    return axios.get(`${URL_PREFIX}/api/lotr`)
  }
}

export default API

