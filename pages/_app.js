import { getDataCatelogy } from '../data/data';
import { useState, useEffect, createContext } from 'react';

import '../styles/globals.scss';

export const Data = createContext();

export default function MyApp({ Component, pageProps }) {
    const [data, setData] = useState();

    useEffect(() => {
        const featch = async () => {
            getDataCatelogy().then((res) => {
                if (res.status === 200 && res.statusText === 'OK') {
                    setData(res.data);
                }
            });
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
