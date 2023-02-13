import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CateloryPage from '~/components/pages/catelories-page/catelory-page';
import serviceCatelory from '~/services/service-catelory';

function ProductPage() {
    // { dataProducts, cateloryId }
    const [dataProducts, setdataProducts] = useState();
    const router = useRouter();
    const cateloryId = router.query.catelory;
    useEffect(() => {
        serviceCatelory().then((res) => {
            const data = res.find((item) => item.c_id === cateloryId);
            setdataProducts(data);
        });
    }, [cateloryId]);

    return (
        <div className='container'>
            <CateloryPage
                menu={dataProducts}
                cateloryId={cateloryId}
            />
        </div>
    );
}
export default ProductPage;
// export async function getStaticPaths() {
//     const data = await serviceCatelory();
//     const cateloriesId = data.map((cateloryId) => ({
//         params: {
//             catelory: cateloryId.c_id,
//         },
//     }));
//     return {
//         paths: cateloriesId,
//         fallback: true, // can also be true or 'blocking'
//     };
// }

// `getStaticPaths` requires using `getStaticProps`

// export async function getStaticProps(context) {
//     const data = await serviceCatelory();
//     const cateloryId = context.params.catelory;
//     if (data !== undefined) {
//         const dataProductCatelory = data.find((item) => item.c_id === cateloryId);
//         return {
//             // Passed to the page component as props
//             props: { dataProducts: dataProductCatelory, cateloryId },
//         };
//     }
// }
