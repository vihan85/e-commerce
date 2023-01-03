import Head from 'next/head';
import { useRouter } from 'next/router';
import { createContext } from 'react';
import '~/styles/globals.scss';
import MainLayout from '../components/layout/main-layout/main-layout';
import LoadingSpinner from '../components/ui/loading-spinner';

export const RouterAcctive = createContext();

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
   
    if (!router) {
        return <LoadingSpinner />;
    }
    return (
        <RouterAcctive.Provider value={{ router }}>
            <MainLayout>
                <Head>
                    <title>Ecommerce</title>
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </RouterAcctive.Provider>
    );
}
