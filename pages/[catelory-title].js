import { useEffect, useState } from 'react';
import CateloryPage from '~/components/pages/catelories-page/catelory-page';
import { useRouter } from 'next/router';
import { getFeatureCatelory } from '../helpers/api-util';
import LoadingSpinner from '../components/ui/loading-spinner';

function ProductPage() {
    const [dataCateleryTitle, setDataCateleryTitle] = useState([]);
    const router = useRouter();
    useEffect(() => {
        getFeatureCatelory().then((res) => {
            setDataCateleryTitle(res);
        });
    }, []);
    if (dataCateleryTitle.length === 0) {
        return <LoadingSpinner />;
    }
    return (
        <div className='container'>
            <CateloryPage
                router={router}
                dataCateleryTitle={dataCateleryTitle}
            />
        </div>
    );
}
export default ProductPage;
