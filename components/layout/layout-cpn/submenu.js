import classNames from 'classnames/bind';
import Link from 'next/link';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from './main-header.module.scss';
import TippyHeadless from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function SubMenu({ data }) {
    const renderSubMenu = (item) => {
        return (attrs) => (
            <div
                className='box'
                tabIndex='-1'
                {...attrs}>
                <SubMenu data={item !== undefined ? item : null} />
            </div>
        );
    };
    if (Array.isArray(data)) {
        return (
            <ul className={cx('sub-menu_list')}>
                {Array.isArray(data) &&
                    data.map((item) => (
                        <span key={item.id}>
                            <TippyHeadless
                                interactive={true}
                                render={renderSubMenu(item.categories)}
                                placement={'right-start'}
                                offset={[-8, 0]}>
                                <li className={cx('sub-menu_item')}>
                                    <Link href={`/${item.id}`}>
                                        <span className={cx('sub-menu_item-title')}>{item.name}</span>
                                        {item.categories && (
                                            <span className={cx('sub-menu_icon')}>
                                                <FontAwesomeIcon icon={faSortDown} />
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            </TippyHeadless>
                        </span>
                    ))}
            </ul>
        );
    } else {
        return <Fragment />;
    }
}
export default SubMenu;
