function find() {
  let tag = document.getElementById("place");
  let place = tag.value;
  console.log(place);
  if (place === "") {
    let att = document.createAttribute("required");
    att.value = "required";
    tag.setAttributeNode(att);
  } else {
    let url = "https://api.apixu.com/v1/current.json?key=770a26a805204946ab582604193003&q=" + place;

    console.log(url);

    // let weather
    // let fetchedJson = fetch(url)
    //   .then(data => {
    //     weather = JSON.parse(data)
    //   });


    // console.log(weather);
    // weather = JSON.parse(fetchedJson);

    // console.log(weather);

    // let weather;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let found = JSON.stringify(myJson);
        let weather = JSON.parse(found);

        let weatherData = `<div class="card-panel">
      <div class = "center-align">
   <span class="card-title ">` + weather.location.name + `</span>
   
   <p>Weather Condition :<b>` + weather.current.condition.text + `</b></p>
   <img src =` + weather.current.condition.icon + ` alt="Weather">
   
  
   <div class="row">
   <p>Celsius :<b>` + weather.current.temp_c + `</b></p>
   </div>
   <div class = "row">
   <p>Farenheit :<b> ` + weather.current.temp_f + `</b></p>
   </div>
   </div>
   </div>`

        document.getElementById('weatherResult').innerHTML = weatherData;
      });


    // console.log(weather.location.name);
  }
}

function findKey() {
  let tag = document.getElementById("place");
  tag.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
      find();
    }
  });

}