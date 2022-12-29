/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    faArrowRightToBracket,
    faBagShopping,
    faCarSide,
    faCartPlus,
    faColonSign,
    faIdCard,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './main-header.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
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
                            <input placeholder='Search (Keyword,etc)' />
                            <button className={cx('navbar-header_nav-search-icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                        <div className={cx('navbar-header_nav-card')}>
                            <span className={cx('navbar-header_nav-card-icon')}>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderTop;
