# Weather App

Accessing Temperature details using the [OpenWeatherMap](https://openweathermap.org/) API.

Using HTML5 Geolocation we access the users position in Latitude and Longitude coordinates.

### API call using geographic coordinates
#### API call
 ```
 api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={validAPIKey}
 ```

#### Parameters
```
lat, lon coordinates of the location of your interest
```
```
appid valid key to access the API
```

#### Example for API Call
```
api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=XXXXXXXXXXXXXXX
```

##### API Response
``` 
{
"coord": { "lon": 139,"lat": 35},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 289.92,
    "pressure": 1009,
    "humidity": 92,
    "temp_min": 288.71,
    "temp_max": 290.93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  "clouds": {
    "all": 2
  },
  "dt": 1560350192,
  "sys": {
    "type": 3,
    "id": 2019346,
    "message": 0.0065,
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  },
  "timezone": 32400,
  "id": 1851632,
  "name": "Shuzenji",
  "cod": 200
} 
```
