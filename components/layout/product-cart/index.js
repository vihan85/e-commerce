/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './product-cart.module.scss';
const cx = classNames.bind(styles);
function ProductCart({ productsCart }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wapper')}>
                <div className={cx('header')}>
                    <p>Products</p>
                </div>
                <div className={cx('body')}>
                    <ul>
                        {productsCart.map((item) => {
                            const { data_images, data_price, data_product } = item;
                            const [imageLarge] = data_images.dt_image_groups
                            console.log(imageLarge)
                            return (

                                <li key={item.se_product_id}>
                                    <div className={cx('item')}>
                                        <div className={cx('avatar')}>
                                            <span>
                                                <img
                                                    alt={'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZYGO_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw23f208a4/images/large/PG.10207165.JJ1ANB1.PZ.jpg'}
                                                    src={'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZYGO_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw23f208a4/images/large/PG.10207165.JJ1ANB1.PZ.jpg'}
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
                                    <span className={cx('item_icon-close')}>X</span>
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
