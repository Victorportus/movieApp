import axios from 'axios';
import { API_KEY, BASE_URL } from '../config/apiConfig';

export async function fetchData(page, selectedValue) {
    const fields = ['title', 'popularity', 'release_date', 'poster_path', 'id', 'name'];
    try {
        
        const response = await axios.get(`${BASE_URL}/${page}/${selectedValue}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
            }
        });

        const movies = response.data.results;

        const filteredMovies = movies.map(movie => {
            return fields.reduce((filtered, field) => {
                if (movie[field]) {
                    filtered[field] = movie[field];
                }
                return filtered;
            }, {});
        });

        return filteredMovies;
    } catch (error) {
        if (error.response) {
            console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }
        throw error;
    }
}
