import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ProductVariationsPage from '~/components/pages/product-variations-page';
import serviceVariations from '~/services/service-variation';

function ProductVariations() {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (router.query.provariations !== undefined) {
            const [link] = router.query.provariations.split('&');
            serviceVariations(link).then((res) => setData(res));
        }
    }, [router.query.provariations]);
    if (router.query.provariations !== undefined) {
        const [link, id] = router.query.provariations.split('&');
        const getProductMaster = (data, id) => {
            const productMaster = data.find((produc) => produc.promas_product_id === id);
            return productMaster;
        };
        return <ProductVariationsPage data={getProductMaster(data, id) !== undefined && getProductMaster(data, id)} />;
    }
}
export default ProductVariations;
