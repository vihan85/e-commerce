import { useRouter } from 'next/router';
import MainHeader from '../components/layout/layout-cpn/main-header';
import parse from 'html-react-parser';
import { useContext } from 'react';
import { Data } from './_app';
function ProductPage() {
    const router = useRouter();
    const curentRouter = router.query.products;
    const data = useContext(Data);
    console.log(data);
    return (
        <div>
            <MainHeader />
            {data.categories.map((item) => {
                if (item.id === curentRouter && item.c_headerMenuBanner) {
                    return (
                        <div key={item.id}>
                            <h1>{item.id} page</h1>
                            {parse(item.c_headerMenuBanner)}
                        </div>
                    );
                }
            })}
        </div>
    );
}
export default ProductPage;
