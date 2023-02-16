import axios from 'axios';
// process.env.NEXT_PUBLIC_BASE_URL
//process.env.NEXT_PUBLIC_MOCK_URL
const httpRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MOCK_URL,
});
console.log()
const get = async (path, option) => {
    const request = httpRequest.get(path, option).then((respon) => respon);
    return request;
};

export { httpRequest, get };
