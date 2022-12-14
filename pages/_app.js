import { useState, useEffect, createContext } from 'react';
import * as sevices from '../api-services/services';
import '../styles/globals.scss';

export const Data = createContext();

export default function MyApp({ Component, pageProps }) {
    const [data, setData] = useState();

    useEffect(() => {
        const featch = async () => {
            sevices.catelogy('categories', '3').then((res) => {
                setData(res.data);
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
