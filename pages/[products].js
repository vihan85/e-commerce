import { useRouter } from 'next/router';
import MainLayOut from '../components/layout/main-layout';

function ProductPage() {
    const router = useRouter();

    return <MainLayOut></MainLayOut>;
}
export default ProductPage;
