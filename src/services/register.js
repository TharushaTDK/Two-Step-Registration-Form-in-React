import API from '../api/axios';

export const registerUser = (payload) => {
    return API.post('/api/register', payload);
};
