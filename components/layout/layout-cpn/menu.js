import classNames from 'classnames/bind';
import styles from './main-header.module.scss';
import TippyHeadless from '@tippyjs/react/headless';

import React from 'react';
import Link from 'next/link';
import SubMenu from './submenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ data }) {
    const subMenu = (item) => {
        return (attrs) => (
            <div
                className='box'
                tabIndex='-1'
                {...attrs}>
                <SubMenu data={item.categories !== undefined ? item.categories : null} />
            </div>
        );
    };
    return (
        <ul className={cx('main-header_list')}>
            {data.map((item) => {
                if (item.c_showInMenu) {
                    return (
                        <span  key={item.id}>
                            <TippyHeadless
                                interactive={true}
                                placement='bottom-start'
                                offset={[0, 0]}

                                render={subMenu(item)}>
                                <li className={cx('main-header_item')}>
                                    <Link href={`/${item.id}`}>
                                        {item.name}
                                        {item.categories && (
                                        <span className={cx('main-header_icon')}>
                                            <FontAwesomeIcon icon={faSortDown}/>
                                        </span>
                                    )}
                                    </Link>

                                </li>
                            </TippyHeadless>
                        </span>
                    );
                }
            })}
        </ul>
    );
}
export default Menu;
