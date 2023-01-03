import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';

import styles from './product-sidebar.module.scss';
import SidebarCatelogy from './sidebar-catelogy';
import SidebarColor from './sidebar-color';
import SideBarNewArrival from './sidebar-new-arrival';
import SidebarPrice from './sidebar-price';
import SidebarSort from './sidebar-sort';
import Button from '~/components/ui/btn/btn';
import { useRouter } from 'next/router';
import serviceRefinement from '~/services/service-refinment';
import serviceSort from '~/services/service-sort';
const cx = classNames.bind(styles);

function ProductSidebar({ routerId }) {
    const [refinements, setRefinements] = useState([]);
    const [sort, setSort] = useState([]);
    const router = useRouter();

    useEffect(() => {
        serviceRefinement(router.query).then((res) => setRefinements(res));
        serviceSort(router).then((res) => {
            setSort(res);
        });
    }, [routerId]);
    if (refinements.length > 0) {
        return (
            <aside className={cx('custom-select')}>
                <SidebarSort data={sort} />

                <div className={cx('button-reset', { card: true })}>
                    <Button
                        onClick={() => {
                            router.push({
                                pathname: routerId.join('/'),
                            });
                        }}>
                        Reset
                    </Button>
                </div>

                {refinements.map((refinement) => {
                    switch (refinement.re_id) {
                        case 'cgid':
                            return (
                                <SidebarCatelogy
                                    key={refinement.re_id}
                                    data={refinement}
                                    routerId={routerId}
                                />
                            );
                        case 'c_refinementColor':
                            return (
                                <SidebarColor
                                    key={refinement.re_id}
                                    data={refinement}
                                    routerId={routerId}
                                />
                            );

                        case 'c_isNew':
                            return (
                                <SideBarNewArrival
                                    key={refinement.re_id}
                                    data={refinement}
                                />
                            );

                        case 'price':
                            return (
                                <SidebarPrice
                                    key={refinement.re_id}
                                    data={refinement}
                                    routerId={routerId}
                                />
                            );

                        default:
                    }
                })}
            </aside>
        );
    }
}
export default ProductSidebar;
