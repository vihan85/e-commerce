import classNames from 'classnames/bind';
import styles from './product-sidebar.module.scss';

import { useRouter } from 'next/router';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarCatelogy({ data, routerId }) {
    const router = useRouter();
    parent = routerId;
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
                            <li key={item.re_value}>
                                <ul className={cx('card-item')}>
                                    <li>
                                        <input
                                            value={item.re_value && item.re_value}
                                            onChange={(e) => {
                                                handleChange(e.target.value);
                                                setvalueChecked(e.target.value);
                                            }}
                                            id={item.re_value}
                                            name='card-select'
                                            type={'radio'}
                                        />
                                        <label htmlFor={item.re_value}>{item.re_label}</label>

                                        <ul>
                                            {item.re_values &&
                                                item.re_values.map((subItem) => (
                                                    <li key={subItem.re_value}>
                                                        <input
                                                            checked={subItem.re_value === valueChecked}
                                                            onChange={(e) => {
                                                                handleChange(e.target.value);
                                                                setvalueChecked(e.target.value);
                                                            }}
                                                            id={subItem.re_value}
                                                            name='card-select'
                                                            type={'radio'}
                                                            value={subItem.re_value && subItem.re_value}
                                                        />
                                                        <label htmlFor={subItem.re_value}>{subItem.re_label}</label>
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
