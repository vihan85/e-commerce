import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useContext } from 'react';

import { Data } from '~/pages/_app';
import styles from './product-content.module.scss';

const cx = classNames.bind(styles);

function ProductContent() {
    const data = useContext(Data);
    const getData = (productId, keyValue, key) => {
        if (data.data.dataPrice !== undefined && data.data.dataPrice.hits) {
            const objectValue = data.data.dataPrice.hits.find((price) => {
                return price[key] === productId;
            });
            if (objectValue !== undefined && objectValue[keyValue]) {
                return `$${objectValue[keyValue]}`;
            } else {
                return 'null';
            }
        }
        return;
    };
    const getImg = (id) => {
        if (data.data.dataImg !== undefined && data.data.dataImg.hits) {
            const imgs = data.data.dataImg.hits.find((img) => img.product_id === id);
            if (imgs !== undefined && imgs.image) {
                return imgs.image.dis_base_link;
            } else {
                return 'null';
            }
        }

        return;
    };

    if (!data.data.dataProduct) {
        return <p> Loading...</p>;
    }
    return (
        <div className='grib'>
            <div className={`${cx('header')} row`}>
                <div className='col'>
                    <p>result</p>
                </div>
            </div>
            <div className='row'>
                {data.data.dataProduct !== undefined &&
                    data.data.dataProduct.hits &&
                    data.data.dataProduct.hits.map((product) => {
                        return (
                            <div
                                key={product.product_id}
                                className={`col c-3 ${product.product_id}`}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-item_img')}>
                                        <Link href={'img-item'}>
                                            <img
                                                src={getImg(product.product_id)}
                                                alt={''}></img>
                                        </Link>
                                    </div>
                                    <p className={cx('product-item_desc')}>{product.product_name}</p>
                                    <p className={cx('product-item_price')}>{getData(product.product_id, 'price', 'product_id')}</p>
                                    <div className={cx('product-item__rating')}>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
export default ProductContent;
