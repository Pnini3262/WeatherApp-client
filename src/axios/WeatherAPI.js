import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5001/api";

export const getWeatherByCity = async (city) => {
    try {
         const response = await axios.get(`/weather`,{params: { city }}
        );

        console.log("data:", response.data);
        
    return response.data; 
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; 
    }
    };
    