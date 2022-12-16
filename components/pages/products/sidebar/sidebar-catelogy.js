import classNames from 'classnames/bind';
import styles from './product-sidebar.module.scss';

import { useRouter } from 'next/router';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarCatelogy({ data }) {
    const router = useRouter();
    let parent = router.query.slug;
    const [valueChecked, setvalueChecked] = useState(parent);
    const handleChange = (id) => {
        router.push({
            pathname: `${parent}/${id}`,
        });
    };
    if (parent) {
        parent = router.query.slug[0];
    }
    if (data.data.dataCatelory) {
        return data.data.dataCatelory.categories.map((item) => {
            if (parent === item.id) {
                return (
                    <div
                        key={item.id}
                        className={cx('card')}>
                        <div className={cx('card-header')}>
                            <p>{item._type}</p>
                        </div>
                        <ul>
                            <li>
                                <ul className={cx('card-item')}>
                                    <li>
                                        <input
                                            value={item.id}
                                            onChange={(e) => {
                                                handleChange(e.target.value);
                                                setvalueChecked(e.target.value);
                                            }}
                                            id={item.id}
                                            name='card-select'
                                            type={'radio'}
                                        />
                                        <label htmlFor={item.id}>{item.id}</label>
                                        <ul>
                                            {item.categories &&
                                                item.categories.map((subItem) => (
                                                    <li key={subItem.id}>
                                                        <input
                                                            checked={subItem.id === valueChecked}
                                                            onChange={(e) => {
                                                                handleChange(e.target.value);
                                                                setvalueChecked(e.target.value);
                                                            }}
                                                            id={subItem.id}
                                                            name='card-select'
                                                            type={'radio'}
                                                            value={subItem.id}
                                                        />
                                                        <label htmlFor={subItem.id}>{subItem.name}</label>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                );
            }
        });
    }
}
export default SidebarCatelogy;
