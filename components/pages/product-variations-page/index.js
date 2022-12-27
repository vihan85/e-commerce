/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './product-variations-page.module.scss';
const cx = classNames.bind(styles);
function ProductVariationsPage({ data }) {
    return (
        <div className={cx('grid wide')}>
            <div className={cx('row')}>
                <div className={cx('col l-6')}>
                    <div className={cx('product-img')}>
                        <img
                            alt={'/'}
                            src={
                                'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw995ea270/images/large/PG.10247474.JJP49XX.PZ.jpg'
                            }
                        />
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
                        <h1 className={cx('product-info_title')}>{data.promas_product_name}</h1>
                        <div className={cx('product-info_rating')}>
                            <p className={cx('product-info_rating-name')}>
                                Item No.
                                <span>{data.promas_product_id}</span>
                            </p>
                            <ul className={cx('product-info_rating-start')}></ul>
                        </div>
                        <div className={cx('product-info_select')}>
                            <div className={cx('product-info_select-color')}>
                                <p>Select Color</p>

                                {data.promas_variation_attributes !== undefined &&
                                    data.promas_variation_attributes.map((item) => {
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
                                    {data.promas_variation_attributes !== undefined &&
                                        data.promas_variation_attributes.map((item) => {
                                            if (item.id === 'size') {
                                                return (
                                                    <select key={item.id}>
                                                        {item.values.map((size) => (
                                                            <optgroup key={size.value}>
                                                                <option value={size.value}>{size.name}</option>
                                                            </optgroup>
                                                        ))}
                                                    </select>
                                                );
                                            }
                                        })}
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
                </div>
            </div>
        </div>
    );
}
export default ProductVariationsPage;
