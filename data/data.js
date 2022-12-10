import axios from 'axios';

export const getCatelogy = async () => {
    const res = await axios.get('http://localhost:5000/categories?levels=3');
    return res.data.categories
}


