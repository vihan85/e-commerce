import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainHeader from '../components/layout/layout-cpn/main-header';
import { getDataCatelogy } from '../data/data';
import parse from 'html-react-parser';
function ProductPage() {
    const router = useRouter();
    const curentRouter = router.query.products;
    const [data, setData] = useState([]);
    useEffect(() => {
        const featch = async () => {
            const getData = await getDataCatelogy();
            setData(getData);
        };
        featch();
    }, []);

    return (
        <div>
            <MainHeader />

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
