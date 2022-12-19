import classNames from 'classnames/bind';

import * as services from '~/api-services/services';
import { useContext } from 'react';

import styles from './product-sidebar.module.scss';
import SidebarCatelogy from './sidebar-catelogy';
import SidbarColor from './sidebar-color';
const cx = classNames.bind(styles);
classNames;
function ProductSidebar({data}) {
    // console.log(data)
    return (
        <aside className={cx('custom-select')}>
            {/* <select aria-label='ads'>
                <option>best-matches</option>
                <option>Price Low To High</option>
            </select>
            <SidebarCatelogy data={data} />
            <SidbarColor dataColors={dataColors} /> */}
        </aside>
    );
}
export default ProductSidebar;
