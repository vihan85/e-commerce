import { useEffect, useState } from 'react';
import HomePage from '~/components/pages/home-page';
import LoadingSpinner from '../components/ui/loading-spinner';

export default function Home() {
    const [showSpinner, setShowSpinner] = useState(true);
    useEffect(() => {
        const showSpinner = setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
        return () => {
            clearTimeout(showSpinner);
        };
    }, [showSpinner]);
    return <>{<HomePage />}</>;
}
