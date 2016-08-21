import axios from 'axios';

const WEATHER_API_KEY = '03ff6f1231c4605d5d5b7d6aa478fbf8';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${WEATHER_URL}&q=${city},us`;
    const data = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: data
    };
}