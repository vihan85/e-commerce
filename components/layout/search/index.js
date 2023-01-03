/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './search.module.scss';
const cx = classNames.bind(styles);
function Search({ dataSearch, icon }) {
    if (dataSearch) {
        return (
            <div className={cx('container')}>
                <div className={cx('wapper')}>
                    <div className={cx('header')}>
                        <p>Products</p>
                    </div>
                    <div className={cx('body')}>
                        <ul>
                            {dataSearch.map((item) => (
                                <li key={item.se_product_id}>
                                    <div className={cx('item')}>
                                        <div className={cx('avatar')}>
                                            <span>
                                                <img
                                                    alt={item.se_image.alt}
                                                    src={item.se_image.dis_base_link}
                                                />
                                            </span>
                                        </div>
                                        <div className={cx('des')}>
                                            <p>
                                                <Link href={`/product-variations/&${item.se_product_id}`}>{item.se_product_name}</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <span className={cx('item_icon-close')}>{icon}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('wapper')}>
                    <div className={cx('header')}>
                        <p>Catelories</p>
                    </div>
                    <div className={cx('body')}>
                        <ul>
                            <li>
                                <div className={cx('item')}>
                                    <div className={cx('avatar')}>
                                        <span>
                                            <img
                                                alt='Product thumbnail image for Modern Dress Shirt'
                                                src='https://tse3.mm.bing.net/th?id=OIP.URQlN8OWLWD3U_42eisGHwHaKu&pid=Api&P=0'
                                            />
                                        </span>
                                    </div>
                                    <div className={cx('des')}>
                                        <p>
                                            <Link href={`/`}></Link>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;
