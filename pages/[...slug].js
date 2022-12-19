import { MainLayout } from '~/components/layout/main-layout';
import ProductListPage from '~/components/pages/products';

function ProductList() {
    return (
            <MainLayout>
                <ProductListPage />
            </MainLayout>
    );
}
export default ProductList;
