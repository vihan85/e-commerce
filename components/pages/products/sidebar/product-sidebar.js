import classNames from 'classnames/bind';

import * as services from '~/api-services/services';
import { useContext, useEffect, useState } from 'react';

import styles from './product-sidebar.module.scss';
import SidebarCatelogy from './sidebar-catelogy';
import SidbarColor from './sidebar-color';
import { getRefinements } from '~/helpers/api-util';

const cx = classNames.bind(styles);

function ProductSidebar({ routerId }) {
    const [refinements, setRefinements] = useState([]);

    useEffect(() => {
        getRefinements(routerId).then((res) => {
            setRefinements(res);
        });
    }, [routerId]);

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
                        <SidbarColor
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
export default ProductSidebar;
