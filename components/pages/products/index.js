import classNames from 'classnames/bind';
import { useState, useEffect, useContext, useReducer } from 'react';
import { RouterAcctive } from '~/pages/_app';

import styles from './products.module.scss';
import { ProductSidebar } from '~/components/pages/products/sidebar';
import { ProductContent } from './product-content';
import LoadingSpinner from '~/components/ui/loading-spinner';
import serviceProductList from '~/services/service-product-list';
import { useRouter } from 'next/router';
import serviceRefinement from '~/services/service-refinment';

const cx = classNames.bind(styles);

function ProductListPage() {
    const [count, setCount] = useState('12');
    const changeCount = (count) => {
        setCount((prev) => +prev + count);
    };
    const [data, setData] = useState();
    const routerAcctive = useContext(RouterAcctive);
    const router = useRouter();
    let routerId = routerAcctive.router.query.pid;
    const routerColor = routerAcctive.router.query.refine;
    const routerPrice = routerAcctive.router.query['refine-price'];
    if (routerId !== undefined) {
        routerId = routerAcctive.router.query.pid;
    }

    useEffect(() => {
        serviceProductList(router, count).then((producListtId) => {
            setData(producListtId);
        });
    }, [routerId, routerColor, routerPrice, count]);
    if (data === undefined) {
        return <LoadingSpinner />;
    }
    return (
        <div className={cx('container', 'grid ')}>
            <div className={cx('wrapper')}>
                <div className={'col c-3'}>
                    <ProductSidebar
                        routerId={routerId}
                        data={data !== undefined && data.dataProduct}
                    />
                </div>
                <div className={'col c-9'}>
                    <ProductContent
                        routerId={routerId}
                        changeCount={changeCount}
                        data={
                            data !== undefined && data.dataProduct && Array.isArray(data.dataPrice) && Array.isArray(data.dataImg) && data
                        }
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductListPage;
