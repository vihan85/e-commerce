/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import styles from './product-cart.module.scss';
const cx = classNames.bind(styles);
function ProductCart({ productsCart }) {
    const [data, setData] = useState(productsCart)
        const handleDelete = (id) => {
            const itemSelected =  data.filter((item) => item.data_product.dt_id !== id)
            setData(itemSelected)
        }
    return (
        <div className={cx('container')}>
            <div className={cx('wapper')}>
                <div className={cx('header')}>
                    <p>Products</p>
                </div>
                <div className={cx('body')}>
                    <ul>
                        {data.map((item) => {
                            const { data_images, data_price, data_product } = item;

                            return (
                                <li key={data_product.dt_id}>
                                    <div className={cx('item')}>
                                        <div className={cx('avatar')}>
                                            <span>
                                                <img
                                                    alt={
                                                        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZYGO_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw23f208a4/images/large/PG.10207165.JJ1ANB1.PZ.jpg'
                                                    }
                                                    src={
                                                        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZYGO_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw23f208a4/images/large/PG.10207165.JJ1ANB1.PZ.jpg'
                                                    }
                                                />
                                            </span>
                                        </div>
                                        <div className={cx('des')}>
                                            <p>
                                                <Link href={`/product-variations/&${data_product.dt_id}`}>{data_product.dt_name}</Link>
                                            </p>
                                            <span className={cx('des_size')}></span>
                                        </div>
                                    </div>
                                    <span onClick={() => {handleDelete(data_product.dt_id)}} className={cx('item_icon-close')}>X</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductCart;
