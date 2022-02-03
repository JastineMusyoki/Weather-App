import axios from 'axios';

const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const key = 'TYXWF26WVLP3M3NEYFW72SE48';
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();
date = yyyy+'-'+mm+'-'+dd;
export const fetchWeather = async (query) => {
    const { data } = await axios.get(`${URL}${query}/${date}?key=${key}`);
    return data;

}