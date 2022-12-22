import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={`${cx('wrapper')}`}>
            <div className={`${cx('container')} grid`}>
                <div className={`${cx('container')} row`}>
                    <div className={`${cx('item')}  l-3`}>
                        <h2>Locate Store</h2>
                        <p>
                            The Store Locator is designed to help you find
                            <br />
                            the closest store near you.
                        </p>
                    </div>
                    <div className={`${cx('item')}  l-3`}>
                        <h2>Account</h2>
                        <ul>
                            <li>
                                <Link href={'/'}>My Account</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Check Order</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${cx('item')}  l-3`}>
                        <h2>Customer Service</h2>
                        <ul>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Gift Certificates</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Help Site</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Map</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${cx('item')} l-3`}>
                        <h2>About</h2>
                        <ul>
                            <li>
                                <Link href={'/'}>About Us</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Privacy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Jobs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${cx('seperate')} row`}></div>
            </div>
        </footer>
    );
}
export default Footer;
