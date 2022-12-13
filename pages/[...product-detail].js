import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

import MainLayout from '../components/layout/main-layout';
import ProductDetailPage from '../components/pages/products';
import { getDataProducts } from '../data/data';
export const DataProducts = createContext();
function ProductDetail() {
    const [dataProduct, setDataProducts] = useState();
    const router = useRouter()
    useEffect(() => {
        const featch = async () => {
            const res = await getDataProducts('productList?count=12&refine_1=cgid=womens');
            setDataProducts(res);
        };
        featch();
    }, []);
    if (dataProduct) {
        return (
            <DataProducts.Provider value={{dataProduct: dataProduct, router: router}}>
                <MainLayout>
                    <ProductDetailPage />
                </MainLayout>
            </DataProducts.Provider>
        );
    }
}
export default ProductDetail;
