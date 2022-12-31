import styles from './product-sidebar.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

function SidebarColor({ data, routerId }) {
    const dataColors = data;
    const router = useRouter();
    const { pid, ...params } = router.query;

    const handleRefineColor = (id) => {
        if (params.refine_1 && params.refine_1.includes(id)) {
            console.log(id);
            delete params.refine_1;
            console.log(params);
            router.push({
                pathname: pid.join('/'),
                query: {
                    ...params,
                },
            });
        } else {
            router.push({
                pathname: pid.join('/'),
                query: {
                    ...params,
                    refine_1: `c_refinementColor=${id}`,
                },
            });
        }
    };
    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <p>{dataColors.re_label}</p>
            </div>

            <ul className={cx('card-item', { color: true })}>
                {dataColors !== undefined &&
                    dataColors.re_values.map((color) => {
                        return (
                            <li key={color.re_value}>
                                <button
                                    onClick={() => {
                                        handleRefineColor(color.re_value);
                                    }}
                                    className={cx('btn-circle-color')}>
                                    <span className={cx('circle', { [`circle-${color.re_value}`]: true })}></span>
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
export default SidebarColor;
