import classNames from 'classnames/bind';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import styles from './main-header.module.scss';

const cx = classNames.bind(styles);

function Menu({ data }) {
    if (data !== undefined) {
        const renderMenu = (data, mainHeaderList, mainHeaderItem, router = false) => {
            if (Array.isArray(data)) {
                const dataItems = data;
                return (
                    <ul className={cx(mainHeaderList)}>
                        {dataItems.map((item) => {
                            if (item.c_catelories) {
                                console.log(item);
                                return (
                                    <li
                                        key={item.c_id}
                                        className={cx(mainHeaderItem)}>
                                        <Link href={`/`}>
                                            {item.c_name}
                                            <span className={cx('main-header_icon')}>
                                                <FontAwesomeIcon icon={faSortDown} />
                                            </span>
                                        </Link>
                                        {renderMenu(item.c_catelories, `${item.c_id}_list`, `${item.c_id}_item`, (router = true))}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        className={cx(mainHeaderItem)}
                                        key={item.c_id}>
                                        <Link href={`/`}>{item.c_name}</Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                );
            }
        };
        return renderMenu(data, 'main-header_list', 'main-header_item');
    }
}
export default Menu;
