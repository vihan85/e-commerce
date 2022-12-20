import styles from './product-sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SidbarColor({ data, routerId }) {
    const dataColors = data;
    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <p>{dataColors.re_label}</p>
            </div>

            <ul className={cx('card-item', { color: true })}>
                {dataColors !== undefined &&
                    dataColors.re_values.map((color) => {
                        return (
                            <li key={color.re_idpresentation}>
                                <button className={cx('btn-circle-color')}>
                                    <span className={cx('circle', { [`circle-${color.re_idpresentation}`]: true })}></span>
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
export default SidbarColor;
