// const axios = require("axios")

// local
<<<<<<< HEAD
const URL_PREFIX = "http://loacalhost:3001"
=======
const URL_PREFIX = "http://localhost:3001"
>>>>>>> 059192a948dc8954cb1e7c185aaedf7cb321660f

// deployed
// created but nothing pushed to heroku  
// const URL_PREFIX = "https://there-and-back-end.herokuapp.com/"




const API = {

  // example front end route
  login: function (userData) {
<<<<<<< HEAD
    return fetch.post(`${URL_PREFIX})/login`, userData)
  },

  signup: function (userData) {
    return fetch.post(`${URL_PREFIX}/signup`, userData) 
  },

  getProfile: function (token) {
    return fetch.get(`${URL_PREFIX}/profile`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
  },

  // updateUser: function(token) {
  //   return fetch.put(`${URL_PREFIX}/api/users/:id`, {
  //     headers: {
  //       authorization: `Bearer ${token}`
  //     }
  //   })
  // },

  // updateGroup: function(token) {
  //   return fetch.put(`${URL_PREFIX}/api/fellowship/:id`, {
  //     headers: {
  //       authorization: `Bearer ${token}`
  //     }
  //   })
  // },






}






















// Grabbing trails and populating page (still have to write code for populating page)
const allTrails = async () => {
  const response = await fetch('/api/trails', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/trails')
  } else {
    alert(response.statusText)
  }
=======
    return axios.post(`${URL_PREFIX}/login`, userData)
  },

  allTrails: function() {
    return axios.get(`${URL_PREFIX}/api/trails`)
  },
>>>>>>> 059192a948dc8954cb1e7c185aaedf7cb321660f
}

export default API


