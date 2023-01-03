/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import TippyHeadless from '@tippyjs/react/headless';
import { faArrowRightToBracket, faBagShopping, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '~/hooks';
import styles from './main-header.module.scss';
import Search from '../../search';
import serviceSearch from '../../../../services/service-search';
import ProductCart from '../../product-cart';

const cx = classNames.bind(styles);

function HeaderTop() {
    const [inputValue, setInputValue] = useState('');
    const searchValues = useDebounce(inputValue, 800);
    const [dataSearch, setDataSearch] = useState({});
    const [showSearchResult, setShowSearchResult] = useState(false);
    const productsCart =localStorage.products_cart? JSON.parse(localStorage.products_cart):[]
    useEffect(() => {
        serviceSearch(searchValues).then((res) => setDataSearch(res));
    }, [searchValues]);

    return (
        <div className={`${cx('navbar-header')} grid wide`}>
            <div className='row'>
                <div className={`${cx('navbar-header_login')} col l-4`}>
                    <button>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        <Link href={'/'}>Login</Link>
                    </button>
                </div>
                <div className={`${cx('navbar-header_nav')} col l-8`}>
                    <div className={cx('navbar-header_nav-logo')}>
                        <Link href={'/'}>
                            <img src={'logo.svg'} />
                        </Link>
                    </div>

                    <div className={cx('navbar-header_nav-search-container')}>
                        <form className={cx('navbar-header_nav-search')}>
                            <TippyHeadless
                                visible={Object.keys(dataSearch).length > 0 && showSearchResult}
                                interactive={true}
                                placement={'bottom-start'}
                                onClickOutside={() => {
                                    setShowSearchResult(false);
                                }}
                                render={(attrs) => (
                                    <div
                                        {...attrs}
                                        tabIndex='-1'>
                                        <Search dataSearch={Object.keys(dataSearch).length > 0 && dataSearch} />
                                    </div>
                                )}>
                                <input
                                    value={inputValue}
                                    onFocus={() => {
                                        setShowSearchResult(true);
                                    }}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                    }}
                                    placeholder='Search (Keyword,etc)'
                                />
                            </TippyHeadless>
                            <button className={cx('navbar-header_nav-search-icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>

                        <div className={cx('navbar-header_nav-card')}>
                            <TippyHeadless
                                visible={true}
                                interactive={true}
                                placement={'bottom-start'}
                                offset={[400,10]}
                                render={(attrs) => (
                                    <div
                                        {...attrs}
                                        tabIndex='-1'>
                                        <ProductCart productsCart={productsCart} />
                                    </div>
                                )}>
                                <span className={cx('navbar-header_nav-card-icon')}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <span className={cx('navbar-header_nav-card-icon-quanity')}>{productsCart.length}</span>
                                </span>
                            </TippyHeadless>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderTop;
