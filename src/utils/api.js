import axios from 'axios';

const apiKey = '6c3fe4be943691f64c16b209427965c2';
const locationUrl = 'https://geocode.maps.co/search?q=';
export default function getLocation(city) {
  return axios.get(`${locationUrl}${city}`);
}

export function getWeatherData(lat, lon) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  );
}
