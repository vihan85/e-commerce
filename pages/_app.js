import { useRouter } from 'next/router';
import { useState, useEffect, createContext } from 'react';
import * as services from '../api-services/services';
import '../styles/globals.scss';

export const Data = createContext();

export default function MyApp({ Component, pageProps }) {
    const [dataCatelory, setDataCatelory] = useState()
    const [dataProduct, setDataProduct] = useState();
    const [dataPrice, setDataPrice] = useState();
    const [dataImg, setDateImg] = useState();
    const router = useRouter()
    let parent
    if(router.query.slug !== undefined) {
         parent =router.query.slug[1]
    }

    useEffect(() => {
        const featch = async () => {
            const resCatelogy = services.catelogy('categories', '3')
            const resProduct = services.products('productList', '12', `cgid=${parent}`);
            const resPrice = services.products('productList/prices', '12', `cgid=${parent}`);
            const resImg = services.products('productList/images', '12', `cgid=${parent}`);

            Promise.all([resCatelogy,resProduct, resPrice, resImg]).then((res) => {
                if (res) {
                    const [resCatelogy,resProduct, resPrice, resImg] = res;
                    setDataCatelory(resCatelogy.data)
                    setDataProduct(resProduct.data);
                    setDataPrice(resPrice.data);
                    setDateImg(resImg.data);
                }
            });
        };
        featch();
    }, [parent]);
    const data = {dataCatelory,dataProduct,dataPrice,dataImg}

    if (data) {
        return (
            <Data.Provider value={{data}}>
                <Component {...pageProps} />
            </Data.Provider>
        );
    }
    return;
}
