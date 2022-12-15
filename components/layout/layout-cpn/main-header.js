import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import * as services from '../../../api-services/services';
import styles from './main-header.module.scss';
import Menu from './menu';
const cx = classNames.bind(styles);

function MainHeader() {
    const [dataCatelory, setDataCatelory] = useState();

    useEffect(() => {
        const fetch = () => {
            const resCatelogy = services.catelogy('categories', '3');

            resCatelogy.then((res) => {
                if (res && res.data) {
                    setDataCatelory(res.data);
                }
                // res && setDataCatelory(res.data);
            });
        };
        fetch();
    }, []);
    return (
        <header className={cx('main-header')}>
            <div className={cx('main-header_comtainer')}>
                <Menu data={dataCatelory} />
            </div>
        </header>
    );
}
export default MainHeader;
