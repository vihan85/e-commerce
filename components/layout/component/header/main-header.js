import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './main-header.module.scss';
import { Menu } from '~/components/layout/component/header';
import * as services from '~/api-services/services';
import { getFeatureCatelory } from '../../../../helpers/api-util';
const cx = classNames.bind(styles);

function MainHeader() {
    const [dataCatelory, setDataCatelory] = useState();

    useEffect(() => {
        const fetch = async () => {
            getFeatureCatelory().then((res) => {
                setDataCatelory(res);
            });
        };
        fetch();
    }, []);

    if (dataCatelory !== undefined) {
        return (
            <header className={cx('main-header')}>
                <div className={cx('main-header_comtainer')}>
                    <Menu data={dataCatelory} />
                </div>
            </header>
        );
    } else {
        return;
    }
}
export default MainHeader;
