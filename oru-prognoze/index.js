
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Vilnius&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d').then( (response) => {
    return response.json();
  }).then( vilniusData => {
        console.log(vilniusData) ;
        getAndSetDefaultCityValue(vilniusData);
  });

  function getAndSetDefaultCityValue(vilniusData) {
    const city = vilniusData.name;
    const cityElement = document.querySelector('.city-list option');
    cityElement.innerHTML = `<p>${city}</p>`
    return city;
  }


  function displayCities(selected) {
    
  }

  function getAllCities() {
    fetch("./country-list.json").then( (response) => {
      if(!response.ok) {
        throw new Error('Failed on fetching data' + response.status);
      }
      return response.json();
    })
    .then( (cities) => {
      console.log(cities);
    });
  }
  getAllCities();




// foreach per city => push kaip option to selector
//  ant selecto evenListener pakeitus value
// fetch'as and value (api call)
// tigger other option by country/


 