import axios from "axios";
import qs from "qs";
import { API_KEY, BASE_URL } from '../config/apiConfig';

const apiSearch = axios.create({
    baseURL: BASE_URL,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
});
apiSearch.interceptors.request.use(request => {
    const queryString = qs.stringify(request.params, { arrayFormat: 'repeat' });
    return request;
});

export const fetchSearchData = async (type, title) => {
    try {
        const params = {
            query: title,
            api_key: API_KEY,
            language: "en-US"
        };

        const response = await apiSearch.get(`/search/${type}`, { params });

        return response.data.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


