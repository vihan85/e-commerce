import axios from 'axios';

export const getDataCatelogy = async () => {
    const res = axios.get('http://localhost:5000/categories?levels=3');
    return res;
};
export const getDataProducts = async (path) => {
    const res = axios.get(`http://localhost:5000/${path}`);
    return res;
};
