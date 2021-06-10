// Register our service worker after the page is loaded
// and if service worker is supported in the web browser
window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

// Download JSON data from API
async function getFruit(fruitName) {
  // Prepare API URL
  let apiUrl = "https://www.fruityvice.com/api/fruit/" + fruitName;
  let response = await fetch(apiUrl, { mode: 'no-cors'});
  let data = await response.json();
  console.log("name   => " + data.name);
  console.log("id     => " + data.id);
  console.log("genus  => " + data.genus);
  console.log("family => " + data.family);
  console.log("order  => " + data.order);
  return data;
}



function updateFruit() {
  let fruitName = document.getElementById("fruitName").value;
  console.log("fruitName => " + fruitName);
  let fruitCaracterstics = getFruit(fruitName);
  document.getElementById("fruitAnswer").innerHTML = fruitCaracterstics.name;
  //document.getElementById("fruitAnswer").innerHTML = fruitName;
}


/*
const btn = document.getElementById('findButton');

btn.addEventListener( 'click', function(event) {
  let fruitName = document.getElementById("fruitName").value;
  //let fruitName = "banana";
  console.log("fruitName => " + fruitName);
  //let fruitCaracterstics = getFruit(fruitName);
  //document.getElementById("fruitAnswer").innerHTML = fruitCaracterstics.name;
  document.getElementById("fruitAnswer").innerHTML = fruitName;
})
*/