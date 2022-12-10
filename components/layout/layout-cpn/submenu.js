import classNames from 'classnames/bind';
import Link from 'next/link';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from './main-header.module.scss';

const cx = classNames.bind(styles);

function SubMenu({ data }) {
    if (Array.isArray(data)) {
        return (
            <ul className={cx('sub-menu_list')}>
                {Array.isArray(data) &&
                    data.map((item) => (
                        <li
                            className={cx('sub-menu_item')}
                            key={item.id}>
                            <Link href={`/${item.id}`}>
                                <span>{item.name}</span>
                                {item.categories && (
                                    <span className={cx('sub-menu_icon')}>
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
            </ul>
        );
    } else {
        return <Fragment />;
    }
}
export default SubMenu;
