import { useRouter } from 'next/router';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import * as services from '../api-services/services';
import MainLayout from '../components/layout/main-layout';
import ProductDetailPage from '../components/pages/products';
import { Data } from './_app';

export const DataProducts = createContext();
function ProductDetail() {
    const appData = useContext(Data);

    const [dataProduct, setDataProduct] = useState();
    const [dataPrice, setDataPrice] = useState();
    const [dataImg, setDateImg] = useState();
    const router = useRouter();
    const routerQuery = appData.data.router.query;
    useEffect(() => {
        const fetch = () => {
            if (Object.keys(routerQuery).length == 0) {
                return function cleanup() {
                    console.log('cleanup');
                };
            }
            const categoryID = routerQuery.productList[1];
            const resProduct = services.products('productList', '12', `cgid=${categoryID}`);
            const resPrice = services.products('productList/prices', '12', `cgid=${categoryID}`);
            const resImg = services.products('productList/images', '12', `cgid=${categoryID}`);

            Promise.all([resProduct, resPrice, resImg]).then((res) => {
                if (res) {
                    const [resProduct, resPrice, resImg] = res;
                    setDataProduct(resProduct.data);
                    setDataPrice(resPrice.data);
                    setDateImg(resImg.data);
                }
            });
        };
        fetch();
    }, [routerQuery]);
    const data = { dataProduct, dataPrice, dataImg, router };

    return (
        <MainLayout>
            <ProductDetailPage productsData={data} />
        </MainLayout>
    );
}
export default ProductDetail;
