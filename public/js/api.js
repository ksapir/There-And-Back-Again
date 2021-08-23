function loadParks() {
let fetchURL = "./wta-parks-data.json"

fetch(fetchURL, {
  cache: 'reload',
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
})

};

loadParks()