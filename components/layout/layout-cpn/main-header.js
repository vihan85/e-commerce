import classNames from 'classnames/bind';
import styles from './main-header.module.scss';
import { useEffect, useState } from 'react';

import Menu from './menu';
import { getDataCatelogy } from '../../../data/data';

const cx = classNames.bind(styles);

function MainHeader() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function featch() {
            const data = await getDataCatelogy();
            setData(data);
        }
        featch();
    }, []);
    return (
        <header className={cx('main-header')}>
            <div className={cx('main-header_comtainer')}>
                <Menu data={data} />
            </div>
        </header>
    );
}
export default MainHeader;
