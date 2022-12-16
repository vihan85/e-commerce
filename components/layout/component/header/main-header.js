import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './main-header.module.scss';
import { Menu } from '~/components/layout/component/header';
import { Data } from '~/pages/_app';
import * as services from '~/api-services/services';
const cx = classNames.bind(styles);

function MainHeader() {
    const [dataCatelory, setDataCatelory] = useState();
    console.log(dataCatelory);
    useEffect(() => {
        const fetch = async () => {
            const resCatelogy = services.catelogy('categories', '3');

            Promise.all([resCatelogy]).then((res) => {
                if (res) {
                    const [resCatelogy] = res;
                    setDataCatelory(resCatelogy.data);
                }
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
