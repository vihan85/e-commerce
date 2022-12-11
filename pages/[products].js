import { useRouter } from 'next/router';
import MainHeader from '../components/layout/layout-cpn/main-header';
import parse from 'html-react-parser';
function ProductPage({ data }) {
    const router = useRouter();
    const curentRouter = router.query.products;

    return (
        <div>
            <MainHeader data={data} />
            {data.map((item) => {
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
