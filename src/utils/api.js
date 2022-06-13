import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const locationUrl = 'https://geocode.maps.co/search?q=';
export default function getLocation(city) {
  return axios.get(`${locationUrl}${city}`);
}

export function getWeatherData(lat, lon) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  );
}
