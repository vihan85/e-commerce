import { getDataCatelogy } from '../data/data';
import { useState, useEffect, createContext } from 'react';

import '../styles/globals.scss';

export const Data = createContext();

export default function MyApp({ Component, pageProps }) {
    const [data, setData] = useState();

    useEffect(() => {
        const featch = async () => {
            const data = await getDataCatelogy();
            setData(data);
        };
        featch();
    }, []);
    if (data) {
        return (
            <Data.Provider value={data}>
                <Component {...pageProps} />
            </Data.Provider>
        );
    }
    return;
}
