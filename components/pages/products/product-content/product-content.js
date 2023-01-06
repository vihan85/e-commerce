/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRef, useState } from 'react';

import Button from '~/components/ui//btn/btn';
import styles from './product-content.module.scss';

const cx = classNames.bind(styles);

function ProductContent({ data, routerId, changeCount }) {
    const totalRef = useRef();
    const [total, setTotal] = useState(data.pro_total);

    const getData = (productId, keyValue, key) => {
        if (data.dataPrice !== undefined && data.dataPrice) {
            const objectValue = data.dataPrice.find((price) => {
                return price[key] === productId;
            });
            if (objectValue !== undefined && objectValue[keyValue]) {
                return `$${objectValue[keyValue]}`;
            } else {
                return 'updating';
            }
        }
        return;
    };
    const handleGetImg = (id) => {
        if (data.dataImg !== undefined && data.dataImg) {
            const imgs = data.dataImg.find((img) => img.p_id === id);
            if (imgs !== undefined && imgs.p_image) {
                return {
                    url: imgs.p_image.dis_base_link,
                    alt: imgs.p_image.alt,
                };
            } else {
                return 'null';
            }
        }

        return;
    };

    if (!routerId) {
        return (
            <div className='grid spinner-center'>
                <div className='row'>
                    <div className='lds-ellipsis c-12'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
    if (data) {
        return (
            <div className='grid'>
                <div className={`${cx('header')}`}>
                    <div className='col l-9 l-o-6'>
                        <p>{data.pro_total} Results</p>
                    </div>
                </div>
                <div className='row'>
                    {data.dataProduct !== undefined &&
                        data.dataProduct &&
                        data.dataProduct.map((product) => {
                            const getImg = handleGetImg(product.p_id);
                            return (
                                <div
                                    key={product.p_id}
                                    className={`col l-4 ${product.p_id}`}>
                                    <div className={cx('product-item')}>
                                        <div className={cx('product-item_img')}>
                                            <Link href={`/product-variations/${routerId[0]}&${product.p_id}`}>
                                                <Image
                                                    width={277}
                                                    height={277}
                                                    src={getImg.url}
                                                    alt={getImg.alt}
                                                />
                                            </Link>
                                        </div>
                                        <p className={cx('product-item_desc')}>{product.p_name}</p>
                                        <p className={cx('product-item_price')}>{getData(product.p_id, 'p_price', 'p_id')}</p>
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
                    <div className={`col l-12 ${cx('center')}`}>
                        <Button
                            onClick={() => {
                                changeCount(12);
                                const currentTotla = Number(totalRef.current.textContent);
                                setTotal(currentTotla - 12);
                            }}>
                            More Results <span ref={totalRef}>{total <= 0 ? 0 : total}</span>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductContent;
