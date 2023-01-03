import classNames from 'classnames/bind';
import styles from './product-sidebar.module.scss';
const cx = classNames.bind(styles);
function SideBarNewArrival({data}) {
    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <p>{data.re_label}</p>
            </div>
            <ul className={cx('card-item')}>
                <li>
                    <input type={'checkbox'}/>
                    <label>{data.re_label}</label>
                </li>
            </ul>
        </div>
    );
}
export default SideBarNewArrival;
