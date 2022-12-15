import classNames from 'classnames/bind';
import styles from './main-header.module.scss';

import React, { useState } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu(categoryObject) {
    const categories = categoryObject.data;

    if (categories) {
        const renderMenu = (data, mainHeaderList, mainHeaderItem, router = false) => {
            if (data.categories) {
                const dataItems = data.categories;
                return (
                    <ul className={cx(mainHeaderList)}>
                        {dataItems.map((item) => {
                            if (item.categories) {
                                return (
                                    <li
                                        key={item.id}
                                        className={cx(mainHeaderItem)}>
                                        <Link href={`/${item.parent_category_tree[0].id}/${item.id}/`}>
                                            {item.name}
                                            <span className={cx('main-header_icon')}>
                                                <FontAwesomeIcon icon={faSortDown} />
                                            </span>
                                        </Link>
                                        {renderMenu(item, `${item.id}_list`, `${item.id}_item`, (router = true))}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        className={cx(mainHeaderItem)}
                                        key={item.id}>
                                        <Link href={`/${item.parent_category_tree[0].id}/${item.id}/`}>{item.name}</Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                );
            }
        };
        return renderMenu(categories, 'main-header_list', 'main-header_item');
    }
}
export default Menu;
