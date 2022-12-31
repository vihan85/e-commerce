import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './main-header.module.scss';
import { Menu } from '~/components/layout/component/header';
import { HeaderTop } from '~/components/layout/component/header';
import serviceCatelory from '../../../../api-services/service-catelory';

const cx = classNames.bind(styles);

function MainHeader() {
    const [dataCatelory, setDataCatelory] = useState();

    useEffect(() => {
        serviceCatelory().then((res) => {
            setDataCatelory(res);
        });
    }, []);

    if (dataCatelory !== undefined) {
        return (
            <header className={cx('header')}>
                <div className={cx('header_top')}>
                    <HeaderTop />
                </div>
                <div className={cx('main-header')}>
                    <div className={cx('main-header_container')}>
                        <Menu data={dataCatelory} />
                    </div>
                </div>
            </header>
        );
    } else {
        return;
    }
}
export default MainHeader;
