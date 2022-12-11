import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './main-header.module.scss';
import Menu from './menu';
import { Data } from '../../../pages/_app';
const cx = classNames.bind(styles);

function MainHeader() {
    const data = useContext(Data);

    return (
        <header className={cx('main-header')}>
            <div className={cx('main-header_comtainer')}>
                <Menu data={data} />
            </div>
        </header>
    );
}
export default MainHeader;
