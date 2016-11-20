import axios from 'axios';

const API_KEY='2425c6fabd23a6d0d26a936c4b0c1a56';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(location) {
	const url = `${ROOT_URL}&q=${location}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}