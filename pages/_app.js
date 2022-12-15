import { useRouter } from 'next/router';
import { useState, useEffect, createContext } from 'react';
import * as services from '../api-services/services';
import '../styles/globals.scss';

export const Data = createContext();

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const data = { router };
    if (data) {
        return (
            <Data.Provider value={{ data }}>
                <Component {...pageProps} />
            </Data.Provider>
        );
    }
    return;
}
