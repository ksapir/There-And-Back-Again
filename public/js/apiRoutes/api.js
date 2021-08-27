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



