import { useRouter } from 'next/router';
import { createContext } from 'react';
import '~/styles/globals.scss';

export const RouterAcctive = createContext();

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
        return (
            <RouterAcctive.Provider value={{ router }}>
                <Component {...pageProps} />
            </RouterAcctive.Provider>
        );

}
