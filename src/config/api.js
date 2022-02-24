import axios from 'axios';

export const api = {
    get: async (resource) => {
        const api = process.env.API_ENDPOINT;
        try {
            const response = await fetch(api.concat(resource));
            const data = await response.json();
            return data;

        } catch (err) { console.error(err) };
    },
    post: async (endpoint, apiDomain = 'tccmedia') => {
        const src = _getSource();
        const api = _apiMap(src)[apiDomain];
        try {
            const response = await axios.post(api.domain.concat(endpoint), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': api.auth
                }
            });
            return await response.data;

        } catch (err) { console.error(err) };
    }
};

export const { get, post } = api
