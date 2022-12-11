import { getDataCatelogy } from '../data/data';
import { useState, useEffect } from 'react';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const featch = async () => {
            const data = await getDataCatelogy();
            setData(data);
        };
        featch();
    }, []);
    return (
        <Component
            data={data}
            {...pageProps}
        />
    );
}
