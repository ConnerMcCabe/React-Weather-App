import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            appid: process.env.REACT_APP_API_KEY,
        }
    });
    return data;
}

