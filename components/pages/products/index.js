import classNames from 'classnames/bind';
import styles from './products.module.scss';
import * as services from '~/api-services/services';
import { useState, useEffect, useContext } from 'react';
import { RouterAcctive } from '~/pages/_app';

import { ProductSidebar } from '~/components/pages/products/sidebar';
import { ProductContent } from './product-content';
const cx = classNames.bind(styles);

function ProductDetailPage() {
    const [data, setData] = useState();
    // const routerAcctive = useContext(RouterAcctive);
    let routerId = routerAcctive.router.query.slug;
    const handleData = (baseData, type, mainData) => {
        if (Array.isArray(baseData.hits)) {
            baseData.hits.forEach((element) => {
                mainData.push({
                    p_id: element.product_id,
                    [type.key]: element[type.value],
                });
            });
        }
    };
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
                    const dataProduct = {
                        dataProduct: [],
                        dataPrice: [],
                        dataImg: [],
                    };
                    handleData(resProduct.data, { key: 'p_name', value: 'product_name' }, dataProduct.dataProduct);
                    handleData(resPrice.data, { key: 'p_price', value: 'price' }, dataProduct.dataPrice);
                    handleData(resImg.data, { key: 'p_image', value: 'image' }, dataProduct.dataImg);
                    setData(dataProduct);
                }
            });
        };
        fetch();
    }, [routerId]);
    return (
        <div className={cx('container', 'grid ')}>
            <div className={cx('wrapper')}>
                <div className={'col c-3'}>{/* <ProductSidebar data={dataProduct} /> */}</div>
                <div className={'col c-9'}>
                    <ProductContent
                        data={
                            Array.isArray(data !== undefined && data.dataProduct) &&
                            Array.isArray(data.dataPrice) &&
                            Array.isArray(data.dataImg) &&
                            data
                        }
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductDetailPage;
