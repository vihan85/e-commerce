/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useContext, useState } from 'react';
import Button from '../../ui/btn/btn';
import { ProviderCart } from '../main-layout/main-layout';



import styles from './product-cart.module.scss';
const cx = classNames.bind(styles);
function ProductCart() {
    const productsCart = localStorage.cart_list ? JSON.parse(localStorage.cart_list) : [];
    const updatequalityCart = useContext(ProviderCart)
    let proList = JSON.parse(localStorage.cart_list);
    const handleDelete = (index) => {
        proList.splice(index, 1);
        localStorage.cart_list = JSON.stringify(proList);
        updatequalityCart()
    };
    const handleDeleteAll = () => {
        
        localStorage.cart_list = JSON.stringify([]);
        updatequalityCart()
    }
    const handleSumPrice = () => {
        return productsCart.reduce((total, currentValue) => {
            const result = Number(total) + Number(currentValue.price) * Number(currentValue.quanlity);

            return result;
        }, 0);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wapper')}>
                <div className={cx('header')}>
                    <p>Products</p>
                    <p>Total Price: {handleSumPrice()}$</p>
                </div>
                <div className={cx('body')}>
                    <ul>
                        {productsCart.map((item, index) => {
                            return (
                                <li key={item.id_product}>
                                    <div className={cx('info')}>
                                        <div className={cx('item')}>
                                            <div className={cx('avatar')}>
                                                <span>
                                                    <img
                                                        alt={
                                                            'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZYGO_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw23f208a4/images/large/PG.10207165.JJ1ANB1.PZ.jpg'
                                                        }
                                                        src={item.image}
                                                    />
                                                </span>
                                            </div>
                                            <div className={cx('des')}>
                                                <p>
                                                    <Link href={`/product-variations/&${item.id}`}>{item.name}</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            onClick={() => {
                                                handleDelete(index);
                                            }}
                                            className={cx('item_icon-close')}>
                                            X
                                        </span>
                                    </div>
                                    <div className={cx('select')}>
                                        <span>
                                            <strong>Size: </strong> {item.size === 'Select Size' ? 'Dont Size' : item.size}
                                        </span>
                                        <span>
                                            <strong>Quanlity: </strong> {item.quanlity}
                                        </span>
                                        <span>
                                            <strong>
                                                <strong>Price: </strong>
                                                {item.price * item.quanlity} $
                                            </strong>
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {proList.length !== 0 &&(<div className={cx('btn-clear-all')}>
                    <Button btnPrimary onClick={handleDeleteAll} maxWidth>Clear All</Button>
                </div>)}
            </div>
        </div>
    );
}
export default ProductCart;
