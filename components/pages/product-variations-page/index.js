/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRef } from 'react';

import styles from './product-variations-page.module.scss';
const cx = classNames.bind(styles);

function ProductVariationsPage({ data }) {
    const sizerRef = useRef();

    if (data) {
        const { data_product, data_price, data_images, data_variants } = data;
        const { dt_image_groups } = data_images;
        const [large, medium, small] = dt_image_groups;
        const { images } = large;
        const handleSubmit = () => {
            if (localStorage.products_cart) {
                const productsCartList = JSON.parse(localStorage.products_cart);
                productsCartList.push(data);
                localStorage.products_cart = JSON.stringify(productsCartList);
            } else {
                localStorage.products_cart = JSON.stringify([]);
                const productsCartList = JSON.parse(localStorage.products_cart);
                productsCartList.push(data);
                localStorage.products_cart = JSON.stringify(productsCartList);
            }
        };
        return (
            <div className={cx('grid wide')}>
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        <div className={cx('product-img')}>
                            {images.map((image) => (
                                <img
                                    key={image.link}
                                    alt={image.alt}
                                    src={image.link}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={cx('col l-6')}>
                        <div className={cx('product-info')}>
                            <ul className={cx('product-info_item')}>
                                <li>
                                    <Link href={'/womens'}>Womens</Link>
                                </li>
                                <li>
                                    <Link href={'/womens/womens-clothing'}> / Clothing</Link>
                                </li>
                                <li>
                                    <Link href={'/'}> / top</Link>
                                </li>
                            </ul>
                            <h1 className={cx('product-info_title')}>{data_product.dt_name}</h1>
                            <div className={cx('product-info_rating')}>
                                <p className={cx('product-info_rating-name')}>
                                    Item No.
                                    <span>{data_product.dt_id}</span>
                                </p>
                                <ul className={cx('product-info_rating-start')}></ul>
                            </div>
                            <div className={cx('product-info_select')}>
                                <div className={cx('product-info_select-color')}>
                                    <p>Select Color</p>

                                    {data_variants !== undefined &&
                                        data_variants.dt_variants.map((item) => {
                                            if (item.id === 'color') {
                                                return (
                                                    <div key={item.id}>
                                                        {item.values.map((color) => (
                                                            <button key={color.value}>
                                                                <option value={color.value}>{color.name}</option>
                                                            </button>
                                                        ))}
                                                    </div>
                                                );
                                            }
                                        })}
                                </div>
                                <div className={`${cx('product-info_select-size')} row`}>
                                    <div className={cx('col l-8')}>
                                        <p>Select size</p>
                                        <select>
                                            <option>Select Size</option>
                                            {data_variants &&
                                                data_variants.dt_variation_attributes !== undefined &&
                                                data_variants.dt_variation_attributes.map((sizes) => {
                                                    if (sizes.id === 'size') {
                                                        return sizes.values.map((size) => {
                                                            return (
                                                                <option
                                                                    ref={sizerRef}
                                                                    key={size.value}
                                                                    value={size.value}>
                                                                    {size.name}
                                                                </option>
                                                            );
                                                        });
                                                    }
                                                })}
                                        </select>
                                    </div>
                                    <div className={cx('col l-4')}>
                                        <p>Quality</p>
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductVariationsPage;
