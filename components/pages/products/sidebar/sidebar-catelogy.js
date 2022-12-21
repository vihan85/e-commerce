import classNames from 'classnames/bind';
import styles from './product-sidebar.module.scss';

import { useRouter } from 'next/router';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarCatelogy({ data, routerId }) {
    parent = routerId;
    const router = useRouter();
    const [valueChecked, setvalueChecked] = useState(parent);
    const handleChange = (id) => {
        router.push({
            pathname: `${id}`,
        });
    };
    if (data) {
        return (
            <div className={cx('card')}>
                <div className={cx('card-header')}>
                    <p>{data.re_label}</p>
                </div>
                <ul>
                    {data.re_values.map((item) => {
                        return (
                            <li key={item.re_value ? item.re_value : item.re_id}>
                                <ul className={cx('card-item')}>
                                    <li>
                                        <input
                                            value={item.re_id}
                                            onChange={(e) => {
                                                handleChange(e.target.value);
                                                setvalueChecked(e.target.value);
                                            }}
                                            id={item.re_id}
                                            name='card-select'
                                            type={'radio'}
                                        />
                                        <label htmlFor={item.re_id}>{item.re_label}</label>

                                        <ul>
                                            {item.re_values &&
                                                item.re_values.map((subItem) => (
                                                    <li key={subItem.re_value}>
                                                        <input
                                                            onChange={(e) => {
                                                                handleChange(e.target.value);
                                                                setvalueChecked(e.target.value);
                                                            }}
                                                            id={subItem.re_value}
                                                            name='card-select'
                                                            type={'radio'}
                                                            value={subItem.re_value}
                                                        />
                                                        <label htmlFor={subItem.re_value}>{subItem.re_label}</label>
                                                        <ul>
                                                            {subItem.re_values &&
                                                                subItem.re_values.map((item) => (
                                                                    <li key={item.re_id}>
                                                                        <input
                                                                            onChange={(e) => {
                                                                                handleChange(e.target.value);
                                                                                setvalueChecked(e.target.value);
                                                                            }}
                                                                            id={item.re_value}
                                                                            name='card-select'
                                                                            type={'radio'}
                                                                            value={item.re_value}
                                                                        />
                                                                        <label htmlFor={item.re_value}>{item.re_label}</label>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
        // }
    }
    return <h1> sidbar</h1>;
}
export default SidebarCatelogy;
