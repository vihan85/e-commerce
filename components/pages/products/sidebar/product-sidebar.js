import classNames from 'classnames/bind';

import * as services from '~/api-services/services';
import { useContext, useEffect, useState } from 'react';

import styles from './product-sidebar.module.scss';
import SidebarCatelogy from './sidebar-catelogy';
import SidebarColor from './sidebar-color';
import { getRefinements } from '~/helpers/api-util';

const cx = classNames.bind(styles);

function ProductSidebar({ routerId }) {
    const [refinements, setRefinements] = useState([]);
    useEffect(() => {
        getRefinements(routerId).then((res) => {
            console.log(res);
            setRefinements(res);
        });
    }, [routerId]);
    if (refinements.length > 0) {
        return (
            <aside className={cx('custom-select')}>
                <select aria-label='ads'>
                    <option>best-matches</option>
                    <option>Price Low To High</option>
                </select>
                {refinements.map((refinement) => {
                    if (refinement.re_id === 'cgid') {
                        return (
                            <SidebarCatelogy
                                key={refinement.re_id}
                                data={refinement}
                                routerId={routerId}
                            />
                        );
                    }
                    if (refinement.re_id === 'c_refinementColor') {
                        return (
                            <SidebarColor
                                key={refinement.re_id}
                                data={refinement}
                                routerId={routerId}
                            />
                        );
                    }
                })}
            </aside>
        );
    }
}
export default ProductSidebar;
