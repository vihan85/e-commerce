import styles from './product-sidebar.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

function SidebarColor({ data, routerId }) {
    const dataColors = data;
    const router = useRouter();

    const handleRefineColor = (id) => {
        if (router.asPath.includes(id)) {
            console.log(router.asPath);
            router.push({
                pathname: router.query.pid.join('/'),
            });
        } else {
            router.push({
                pathname: router.query.pid.join('/'),
                query: {
                    refine_1: id,
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
