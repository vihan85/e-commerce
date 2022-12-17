import classNames from 'classnames/bind';
import styles from './products.module.scss';
import * as services from '~/api-services/services';
import { useState, useEffect, useContext } from 'react';
import { RouterAcctive } from '~/pages/_app';

import { ProductSidebar } from '~/components/pages/products/sidebar';
import { ProductContent } from './product-content';
const cx = classNames.bind(styles);

function ProductDetailPage() {
    const [dataProduct, setDataProduct] = useState();
    const [dataPrice, setDataPrice] = useState();
    const [dataImg, setDateImg] = useState();
    const data = { dataProduct, dataPrice, dataImg };
    const routerAcctive = useContext(RouterAcctive);
    let routerId = routerAcctive.router.query.slug;
    if (routerId !== undefined) {
        routerId = routerAcctive.router.query.slug[1];
    }
    useEffect(() => {
        const resProduct = services.products('productList/represented_products', '12', `cgid=${routerId}`);
        const resPrice = services.products('productList/prices', '12', `cgid=${routerId}`);
        const resImg = services.products('productList/images', '12', `cgid=${routerId}`);
        const fetch = async () => {
            Promise.all([resProduct, resPrice, resImg]).then((res) => {
                if (res) {
                    const [resProduct, resPrice, resImg] = res;
                    const dataProduct = {}
                    setDataProduct(resProduct.data);
                    setDataPrice(resPrice.data);
                    setDateImg(resImg.data);
                }
            });
        };
        fetch();
    }, [routerId]);
    return (
        <div className={cx('container', 'grid ')}>
            <div className={cx('wrapper')}>
                <div className={'col c-3'}>
                    <ProductSidebar data={dataProduct} />
                </div>
                <div className={'col c-9'}>
                    <ProductContent data={data} />
                </div>
            </div>
        </div>
    );
}
export default ProductDetailPage;
