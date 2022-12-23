import { useEffect, useState } from 'react';
import CateloryPage from '~/components/pages/catelories-page/catelory-page';
import * as services from '~/api-services/services';
import { useRouter } from 'next/router';
import { getFeatureCatelory } from '../helpers/api-util';

function ProductPage() {
    const [dataCateleryTitle, setDataCateleryTitle] = useState([]);
    const router = useRouter();
    useEffect(() => {
        getFeatureCatelory().then((res) => {
            setDataCateleryTitle(res);
        });
    }, []);
    return (
        <CateloryPage
            router={router}
            dataCateleryTitle={dataCateleryTitle}
        />
    );
}
export default ProductPage;
