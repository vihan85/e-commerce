import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
const get = async (path, option) => {
    const request = httpRequest.get(path, option).then((respon) => respon);
    return request;
};

export { httpRequest, get };
