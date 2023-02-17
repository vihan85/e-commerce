/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '~/components/ui/btn/btn';
import styles from './product-variations-page.module.scss';
import { ProviderCart } from '../../layout/main-layout/main-layout';
import LoadingSpinner from '../../ui/loading-spinner';
import Overlay from "../../../components/layout/component/login/overlay"
const cx = classNames.bind(styles);
function ProductVariationsPage({ data }) {
    const [showErr, setShowErr] = useState(false)
    const sizerRef = useRef();
    const nameProductRef = useRef();
    const idproductRef = useRef();
    const quanlity = useRef();
    const imageProductRef = useRef()
    const priceProduceRef = useRef()
    if (data) {
        const { data_product, data_price, data_images, data_variants } = data;
        const { dt_image_groups } = data_images;
        const [large, medium, small] = dt_image_groups;
        const { images } = large;
        const updateQualityCart = useContext(ProviderCart)
        const [spinner, setSpinner] = useState (false)
        
        const handleSubmit = () => {
            const productSelected = {
                name: nameProductRef.current.textContent,
                id_product: new Date().toISOString(),
                id: idproductRef.current.textContent,
                size: sizerRef.current.value,
                quanlity: quanlity.current.value,
                price: priceProduceRef.current.getAttribute('value'),
                image: imageProductRef.current.getAttribute('src'),
            };
            productSelected.size === 'none' || productSelected.quanlity ==='none' ? setShowErr(true) : setShowErr(false)
            if(productSelected.size !== 'none') {
                setSpinner(true)
                if (localStorage.cart_list) {
                    const cartList = JSON.parse(localStorage.cart_list);
                    cartList.push(productSelected);
                    localStorage.cart_list = JSON.stringify(cartList);
                } else {
                    const cartList = [];
                    cartList.push(productSelected);
                    localStorage.cart_list = JSON.stringify(cartList);
                }
                updateQualityCart()
                setTimeout(()=> {
                    setSpinner(false)}, 500)
            }
        }
        return (
            <div className={cx('grid wide')}>
                {spinner && (
                    <>
                        <LoadingSpinner spinnerCenter={'spinnerCenter'}/>
                    </>
                )}
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        <div className={cx('product-img')}>
                        <Swiper
                            onSwiper={(swiper) => console.log(swiper)}
                            
                        >
                                {images.map((image) => (
                                   <SwiperSlide key={image.link}>
                                    <img
                                        ref={imageProductRef}
                                        alt={image.alt}
                                        src={image.link}
                                        />
                                   </SwiperSlide>
                                        
                                   
                                    
                                ))}
                        </Swiper>
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
                            <h1
                                ref={nameProductRef}
                                className={cx('product-info_title')}>
                                {data_product.dt_name}
                            </h1>
                            <div className={cx('product-info_rating')}>
                                <p className={cx('product-info_rating-name')}>
                                    Item No.
                                    <span ref={idproductRef}>{data_product.dt_id}</span>
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
                                        <select ref={sizerRef}>
                                            <option value={'none'}>Select Size</option>
                                            {data_variants &&
                                                data_variants.dt_variation_attributes !== undefined &&
                                                data_variants.dt_variation_attributes.map((sizes) => {
                                                    if (sizes.id === 'size') {
                                                        return sizes.values.map((size) => {
                                                            return (
                                                                <option
                                                                    key={size.value}
                                                                    value={size.value}>
                                                                    {size.name}
                                                                </option>
                                                            );
                                                        });
                                                    }
                                                })}
                                        </select>
                                        <p className={cx('error')}>{showErr &&'Please Select Size!'}</p>
                                    </div>
                                    
                                    <div className={cx('col l-4')}>
                                        <p>Quality</p>
                                        <select ref={quanlity}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <span
                                value={data_price.dt_price}
                                ref={priceProduceRef}
                                className={`${cx('price')}`}>
                                Price: {data_price.dt_price} $
                            </span>
                            
                        </div>
                        <div className={`${cx('cart-btn')}`}>
                            <Button onClick={handleSubmit}> Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductVariationsPage;
