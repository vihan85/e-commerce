import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { use, useContext, useEffect, useState } from 'react';
import { getDataProducts } from '../../../data/data';
import { DataProducts } from '../../../pages/[...product-detail]';
import styles from './product-content.module.scss';
const cx = classNames.bind(styles);
function ProductContent() {
    const value = useContext(DataProducts);
    const parent = value.router.query['product-detail'][1];
    const [dataProduct, setDataProduct] = useState();
    const [dataPrice, setDataPrice] = useState();
    const [moreResuls, setMoreResuls] = useState('12');
    const [dataImg, setDateImg] = useState()
    const getData = (productId, key) => {
        if (dataPrice !== undefined && dataPrice.hits) {
            const price = dataPrice.hits.find((price) => {
                return price.product_id === productId;
            });
            if (price !== undefined && price[key]) {
                return `$${price[key]}`;
            } else {
                return 'null';
            }
        }
        return;
    };
    const handleMoreresults = () => {
        setMoreResuls(moreResuls*2)
    }
    useEffect(() => {
        const featch = async () => {
            const resProduct = await getDataProducts(`productList?count=${moreResuls}&refine_1=cgid=${parent}`);
            setDataProduct(resProduct);
            const resPrice = await getDataProducts(`productList/prices?count=${moreResuls}&refine_1=cgid=${parent}`);
            setDataPrice(resPrice);
            const resImg = await getDataProducts(`productList/images?count=${moreResuls}&refine_1=cgid=${parent}`)
            setDateImg(resImg)
        };
        featch();
    }, [parent, moreResuls]);
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
                                                src='https://images.summitmedia-digital.com/preview/images/2019/11/11/443497_HVKEG_9772_002_062_0000_Light-GG-Marmont-small-shoulder-bag.jpg'
                                                alt={''}></img>
                                        </Link>
                                    </div>
                                    <p className={cx('product-item_desc')}>{product.product_name}</p>
                                    <p className={cx('product-item_price')}>{getData(product.product_id, 'price')}</p>
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
                <div className='col c-12'><button onClick={handleMoreresults}>More Results</button></div>
            </div>
        </div>
    );
}
export default ProductContent;
