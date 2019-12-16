// displaying date and time
function getDate(){
	var myDate = new Date();
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	document.getElementById("date").innerHTML = day[myDate.getDay()] + " | " + myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear();

	var hours = myDate.getHours();
  	var minutes = myDate.getMinutes();
  	var seconds = myDate.getSeconds();
  	var ampm = hours >= 12 ? 'PM' : 'AM';
  	hours = hours % 12;
  	hours = hours ? hours : 12;
  	hours = hours < 10 ? '0' + hours : hours;
  	minutes = minutes < 10 ? '0' + minutes : minutes;
  	seconds = seconds < 10 ? '0' + seconds : seconds;
  	document.getElementById("time").innerHTML = hours + " : " + minutes + " : " + seconds + " " + ampm;

  	var t =setTimeout(getDate, 1000);
}

// getting user position 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   alert("Geolocation is not supported by this browser.");
  }
}

var myObj;

function showPosition(position) {
  // getting latitude and longitude coordinates
  var latitude = Math.floor(position.coords.latitude);
  var longitude = Math.floor(position.coords.longitude);

  // key to access OpenWeatherMap API
  var key = "a7b6f445d1cc7cbe5ed618e6f45d42a9";

  // path to fetch data 
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key + "";

  // fetching data
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      showTemp();
    }
  };
  xmlhttp.open("GET", url , true);
  xmlhttp.send();
}

function showTemp() {
  // setting values to temperature
  var tempVal = myObj.main.temp;
  var descVal = myObj.weather[0].description;
  var cityVal = myObj.name;
  var countryVal = myObj.sys.country;
  var humidVal = myObj.main.humidity;
  var iconVal = myObj.weather[0].icon;

  var tempValCel = kelvinToCel(tempVal);

  //changing the HTML elements
  document.getElementById("temperature").innerHTML = "<p><b>Temperature:</b><i> " + tempValCel + " <span>&#8451;</span></i></p>" 
  document.getElementById("humidity").innerHTML = "<p><b>Humidity:</b><i> " + humidVal + "</i></p>" 
  document.getElementById("description").innerHTML = "<p><b>Description:</b><i> " + descVal + "</i></p>" 
  document.getElementById("location").innerHTML = "<p><b>Location:</b><i> " + cityVal + ", " + countryVal + "</i></p>" 
  document.getElementById("iconImg").src = "icons/" + iconVal + ".png";

}

function kelvinToCel(tempVal){
  return Math.floor(tempVal - 273);
}

function celToFaren(tempValCel) {
  return Math.floor((9/5) * tempValCel + 32);
}

function showFaren() {
  var tempVal = myObj.main.temp;
  var tempValCel = kelvinToCel(tempVal);
  var tempValFaren = celToFaren(tempValCel);
  document.getElementById("temperature").innerHTML = "<p><b>Temperature:</b><i> " + tempValFaren + " <span>&#8457;</span></i></p>" 
}

