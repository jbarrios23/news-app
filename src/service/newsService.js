import axios from 'axios'

const API_KEY = '1a3d491b1e5c4fc1b58e16ce3c7315ea';
const BASE_URL = 'https://newsapi.org/v2';


export const fetchTopNews = async () => {

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: { country: 'us', apiKey: API_KEY }
    });
    console.log("fetchTopNews", response)
    return response.data.articles
};

export const fetchNewsByCategory = async (category) => {

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            country: 'us', // País
            category: category, // Categoría
            apiKey: API_KEY
        }
    });
    console.log("fetchNewsByCategory", response)
    return response.data.articles
};