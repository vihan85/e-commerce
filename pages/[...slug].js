import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

import MainLayout from '../components/layout/main-layout';
import ProductDetailPage from '../components/pages/products';

export const DataProducts = createContext();
function ProductDetail() {
    const router = useRouter();
    return (
        <DataProducts.Provider value={{ router: router }}>
            <MainLayout>
                <ProductDetailPage />
            </MainLayout>
        </DataProducts.Provider>
    );
}
export default ProductDetail;
