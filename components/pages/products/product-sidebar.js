import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { DataProducts } from '../../../pages/[...slug]';
import { Data } from '../../../pages/_app';
import styles from './product-page.module.scss';
const cx = classNames.bind(styles);
classNames;
function ProductSidbar() {
    const router = useRouter();
    const value = useContext(DataProducts);
    const data = useContext(Data);
    let parent = router.query.slug;
    const [valueChecked, setvalueChecked] = useState(parent);
    if (parent) {
        parent = router.query.slug[0];
    }
    const handleChange = (id) => {
        router.push({
            pathname: `${parent}/${id}`,
        });
    };
    return (
        <aside className={cx('custom-select')}>
            <select aria-label='ads'>
                <option>best-matches</option>
                <option>Price Low To High</option>
            </select>
            {data.data.dataCatelory &&
                data.data.dataCatelory.categories.map((item) => {
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
                })}
        </aside>
    );
}
export default ProductSidbar;
