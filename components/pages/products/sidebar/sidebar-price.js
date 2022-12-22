import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './product-sidebar.module.scss';
const cx = classNames.bind(styles);
function SidebarPrice({ data, routerId }) {
    const router = useRouter();
    const handelPrice = (value) => {
        const refine = 'refine-price';
        if (router.query.refine) {
            router.push({
                pathname: `${routerId}`,
                query: {
                    refine: router.query.refine,
                    [refine]: value,
                },
            });
        } else {
            router.push({
                pathname: `${routerId}`,
                query: {
                    [refine]: value,
                },
            });
        }
    };
    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <p>{data.re_label}</p>
            </div>
            <ul className={cx('card-item')}>
                {data.re_values.map((price) => (
                    <li key={price.re_value}>
                        <input
                            id={price.re_value}
                            type={'radio'}
                            name={'price'}
                            value={price.re_value}
                            onChange={() => {
                                handelPrice(price.re_value);
                            }}
                        />
                        <label htmlFor={price.re_value}>{price.re_label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SidebarPrice;
