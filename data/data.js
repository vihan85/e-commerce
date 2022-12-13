import axios from 'axios';

export const getDataCatelogy = async () => {
    const res = await axios.get('http://localhost:5000/categories?levels=3');
    return res.data;
};
export const getDataProducts = async (path) => {
    const res = await axios.get(`http://localhost:5000/${path}`);
    return res.data;
};