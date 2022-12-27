import { useEffect, useState } from 'react';
import CateloryPage from '~/components/pages/catelories-page/catelory-page';
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
    if (!router.query['catelory-title']) {
        return (
            <div className='lds-default'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
    return (
        <CateloryPage
            router={router}
            dataCateleryTitle={dataCateleryTitle}
        />
    );
}
export default ProductPage;
