/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import TippyHeadless from '@tippyjs/react/headless';
import { faArrowRightToBracket, faBagShopping, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import styles from './main-header.module.scss';
import Search from '../../search';
import serviceSearch from '../../../../services/service-search';
import ProductCart from '../../product-cart';
import Login from '../login/login';
import Modal from '../login/modal';
import CreateAccount from '../create-account';
import Button from '../../../ui/btn/btn';


const cx = classNames.bind(styles);

function HeaderTop() {
    const [inputValue, setInputValue] = useState();
    const [dataSearch, setDataSearch] = useState({});
    const searchValues = useDebounce(inputValue, 800);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const productsCart = localStorage.cart_list ? JSON.parse(localStorage.cart_list) : [];
    useEffect(() => {
        if (searchValues !== ' ') {
            serviceSearch(searchValues).then((res) => setDataSearch(res));
        }
        return;
    }, [searchValues]);

    return (
        <>
            <div className={`${cx('navbar-header')} grid wide`}>
                <div className='row'>
                    <div className={`${cx('navbar-header_login')} col l-4`}>
                        <button
                            onClick={() => {
                                setShowModal(!showModal);
                            }}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            <button >Login</button>
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
                                            if (e.target.value.startsWith(' ')) {
                                                setInputValue(inputValue.trim());
                                            } else {
                                                setInputValue(e.target.value);
                                            }
                                        }}
                                        placeholder='Search (Keyword,etc)'
                                    />
                                </TippyHeadless>
                                <button className={cx('navbar-header_nav-search-icon')}>
                                    <span onClick={(e)=> {
                                        e.preventDefault()
                                         setInputValue('')}}><FontAwesomeIcon icon={faSearch} /></span>
                                </button>
                            </form>

                            <div className={cx('navbar-header_nav-card')}>
                                <TippyHeadless
                                    interactive={true}
                                    placement={'bottom-start'}
                                    offset={[400, 10]}
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
            {showModal && (
                <Modal>
                    <Login />
                    <CreateAccount/>
                    <Button marTop maxWidth onClick={()=> {setShowModal(!showModal)}}>Close</Button>
                </Modal>
            )}
        </>
    );
}
export default HeaderTop;
