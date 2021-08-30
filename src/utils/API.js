const axios = require("axios")

// local
const URL_PREFIX = "http://loacalhost:3000"

// deployed
// created but nothing pushed to heroku  
// const URL_PREFIX = "https://there-and-back-end.herokuapp.com/"




const API = {

  // example front end route

  login: function (userData) {
    return axios.post(`${URL_PREFIX})/login`, userData)
  },



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
}

document.querySelector('#allTrails').addEventListener('click', allTrails)


