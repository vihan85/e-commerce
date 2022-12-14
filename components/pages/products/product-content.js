import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import * as services from '../../../api-services/services';
import { DataProducts } from '../../../pages/[...slug]';
import styles from './product-content.module.scss';

const cx = classNames.bind(styles);

function ProductContent() {
    const value = useContext(DataProducts);
    const parent = value.router.query.slug[1];
    const router = useRouter();
    const [dataProduct, setDataProduct] = useState();
    const [dataPrice, setDataPrice] = useState();
    const [dataImg, setDateImg] = useState();
    const [moreResuls, setMoreResuls] = useState('12');

    const getData = (productId, keyValue, key) => {
        if (dataPrice !== undefined && dataPrice.hits) {
            const objectValue = dataPrice.hits.find((price) => {
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
        if (dataImg !== undefined && dataImg.hits) {
            const imgs = dataImg.hits.find((img) => img.product_id === id);
            if (imgs !== undefined && imgs.image) {
                return imgs.image.dis_base_link;
            } else {
                return 'null';
            }
        }

        return;
    };
    const handleMoreresults = () => {
        setMoreResuls(moreResuls * 2);
    };
    useEffect(() => {
        const featch = async () => {
            const resProduct = services.products('productList', moreResuls, `cgid=${parent}`);
            const resPrice = services.products('productList/prices', moreResuls, `cgid=${parent}`);
            const resImg = services.products('productList/images', moreResuls, `cgid=${parent}`);

            Promise.all([resProduct, resPrice, resImg]).then((res) => {
                if (res) {
                    const [resProduct, resPrice, resImg] = res;
                    setDataProduct(resProduct.data);
                    setDataPrice(resPrice.data);
                    setDateImg(resImg.data);
                }
            });
        };
        featch();
    }, [parent, moreResuls]);
    if (!dataProduct) {
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
                {dataProduct !== undefined &&
                    dataProduct.hits &&
                    dataProduct.hits.map((product) => {
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
            <div className='row'>
                <div className='col c-12'>
                    <button onClick={handleMoreresults}>More Results</button>
                </div>
            </div>
        </div>
    );
}
export default ProductContent;
