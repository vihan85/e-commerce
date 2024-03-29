import Head from 'next/head';
import { useRouter } from 'next/router';
import { createContext, useState, useEffect } from 'react';
import '~/styles/globals.scss';
import MainLayout from '../components/layout/main-layout/main-layout';
import LoadingSpinner from '../components/ui/loading-spinner';

export const RouterAcctive = createContext();

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [showSpinner, setShowSpinner] = useState(true);
    useEffect(() => {
        const showSpinner = setTimeout(() => {
            setShowSpinner(false);
        }, 3000);
        return () => {
            clearTimeout(showSpinner);
        };
    }, [showSpinner]);

    return (
        <>
            {showSpinner ? (
                <LoadingSpinner />
            ) : (
                <RouterAcctive.Provider value={{ router }}>
                    <MainLayout>
                        <Head>
                            <title>E-ommerce</title>
                        </Head>
                        <Component {...pageProps} />
                    </MainLayout>
                </RouterAcctive.Provider>
            )}
        </>
    );
}
