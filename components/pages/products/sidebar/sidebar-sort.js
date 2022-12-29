import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import styles from './product-sidebar.module.scss';

const cx = classNames.bind(styles);

function SidebarSort({ data }) {
    const router = useRouter();
    const handleChange = (id) => {
        if (router.query.refine && router.query['refine-price']) {
            router.push({
                pathname: router.query.pid.join('/'),
                query: {
                    refine: router.query.refine,
                    ['refine-price']: router.query['refine-price'],
                    sort: id,
                },
            });
        } else if (router.query['refine-price']) {
            router.push({
                pathname: router.query.pid.join('/'),
                query: {
                    ['refine-price']: router.query['refine-price'],
                    sort: id,
                },
            });
        } else if (router.query.refine) {
            router.push({
                pathname: router.query.pid.join('/'),
                query: {
                    refine: router.query.refine,
                    sort: id,
                },
            });
        } else {
            router.push({
                pathname: router.query.pid.join('/'),
                query: {
                    sort: id,
                },
            });
        }
    };
    return (
        <div className={cx('car')}>
            <select
                aria-label='option-sort'
                onChange={(e) => {
                    handleChange(e.target.value);
                }}>
                {data.map((item) => (
                    <option
                        key={item.re_id}
                        value={item.re_id}>
                        {item.re_label}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default SidebarSort;
