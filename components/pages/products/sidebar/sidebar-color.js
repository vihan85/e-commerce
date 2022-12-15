import styles from '../../products/product-page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SidbarColor({ dataColors }) {
    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <p>Color</p>
            </div>

            <ul className={cx('card-item', { color: true })}>
                {dataColors !== undefined &&
                    dataColors.map((color) => {
                        return (
                            <li key={color.c_id}>
                                <button className={cx('btn-circle-color')}>
                                    <span className={cx('circle', { [`circle-${color.c_id}`]: true })}></span>
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
export default SidbarColor;
