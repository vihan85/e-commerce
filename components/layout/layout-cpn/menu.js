import classNames from 'classnames/bind';
import styles from './main-header.module.scss';
import Link from 'next/link';
import TippyHeadLess from '@tippyjs/react/headless';
import React from 'react';
const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <ul className={cx('main-header_list')}>
            {data.map((item, index) => (
                <span key={index}>
                    <TippyHeadLess
                        interactive={true}
                        placement={'bottom-start'}
                        offset={[]}
                        render={(attrs) => (
                            <div
                                className='box'
                                tabIndex='-1'
                                {...attrs}>
                                {item.children && (
                                    <ul className={cx('sub-menu_list')}>
                                        {item.children.map((subItem, index) => (
                                            <li
                                                className={cx('sub-menu_item')}
                                                key={index}>
                                                <Link href={'/product'}>{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}>
                        <li className={cx('main-header_item')}>
                            <Link href={'/'}>
                                {item.title}
                                <span className={cx('main-header_icon')}>{item.icon}</span>
                            </Link>
                        </li>
                    </TippyHeadLess>
                </span>
            ))}
        </ul>
    );
}
export default Menu;
