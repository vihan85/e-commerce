import classNames from 'classnames/bind';

import styles from './main-header.module.scss';
import Menu from './menu';

const cx = classNames.bind(styles);

function MainHeader({ data }) {
    return (
        <header className={cx('main-header')}>
            <div className={cx('main-header_comtainer')}>
                <Menu data={data} />
            </div>
        </header>
    );
}
export default MainHeader;
