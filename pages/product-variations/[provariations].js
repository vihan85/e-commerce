import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ProductVariationsPage from '~/components/pages/product-variations-page';
import serviceVariations from '~/services/service-variation';
import LoadingSpinner from '~/components/ui/loading-spinner';

function ProductVariations() {
    const router = useRouter();
    const [data, setData] = useState({});

    useEffect(() => {
        if (router.query.provariations) {
            serviceVariations(router).then((res) => setData(res));
        }
        return;
    }, [router.query.provariations]);
    if(Object.keys(data).length === 0) {
       return <LoadingSpinner/>
    }

    return <ProductVariationsPage data={Object.keys(data).length > 0 && data} />;
}
export default ProductVariations;
