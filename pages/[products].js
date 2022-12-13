import { useRouter } from 'next/router';
import MainHeader from '../components/layout/layout-cpn/main-header';
import MainLayOut from '../components/layout/main-layout';
import { Data } from './_app';
function ProductPage() {
    const router = useRouter();

    return <MainLayOut></MainLayOut>;
}
export default ProductPage;
