import classNames from 'classnames/bind';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import styles from './main-header.module.scss';

const cx = classNames.bind(styles);

function Menu({ data }) {
    if (data !== undefined) {
        const renderMenu = (data, mainHeaderList, mainHeaderItem) => {
            if (Array.isArray(data)) {
                const dataItems = data;

                return (
                    <ul className={cx(mainHeaderList)}>
                        {dataItems.map((item) => {
                            const linkhref = item.c_parent_tree.reduce((total, currentValue) => {
                                return `${total}/${currentValue.id}`;
                            }, '');
                            if (item.c_catelories) {
                                return (
                                    <li
                                        key={item.c_id}
                                        className={cx(mainHeaderItem)}
                                        onClick={() => {

                                        }}>
                                        <Link href={linkhref}>
                                            {item.c_name}
                                            <span className={cx('main-header_icon')}>
                                                <FontAwesomeIcon icon={faSortDown} />
                                            </span>
                                        </Link>
                                        {renderMenu(item.c_catelories, `${item.c_id}_list`, `${item.c_id}_item`)}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        onClick={() => {
                                            
                                        }}
                                        className={cx(mainHeaderItem)}
                                        key={item.c_id}>
                                        <Link href={linkhref}>{item.c_name}</Link>
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
