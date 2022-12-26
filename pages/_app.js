import { useRouter } from 'next/router';
import { createContext } from 'react';
import '~/styles/globals.scss';
import MainLayout from '../components/layout/main-layout/main-layout';

export const RouterAcctive = createContext();

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    if(router !== undefined) {}
    return (
        <RouterAcctive.Provider value={{ router }}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </RouterAcctive.Provider>
    );
}
