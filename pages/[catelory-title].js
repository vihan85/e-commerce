import { useEffect, useState } from 'react';
import CateloryPage from '~/components/pages/catelories-page/catelory-page';
import { useRouter } from 'next/router';
import LoadingSpinner from '~/components/ui/loading-spinner';
import serviceCatelory from '~/services/service-catelory';

function ProductPage() {
    const [dataCateleryTitle, setDataCateleryTitle] = useState([]);
    const router = useRouter();
    useEffect(() => {
        serviceCatelory().then((res) => {
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
