/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './home-page.module.scss';
const cx = classNames.bind(styles);
function HomePage() {
    return (
        <div className={cx('container')}>
            <div className={cx('banner')}>
                <img
                    src={
                        'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwe5d89797/images/homepage/homepage-4/large.jpg'
                    }
                />
            </div>
            <div className={`grid wide`}>
                <div className='row sm-gutter'>
                    <div className={`${cx('womens')} col l-8`}>
                        <div className='row sm-gutter'>
                            <div className='col l-6'>
                                <Link
                                    className={cx('item')}
                                    href={'/womens/womens-clothing/womens-clothing-dresses'}>
                                    <img
                                        src={
                                            'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw62149d09/images/homepage/homepage-5/large.jpg'
                                        }
                                    />

                                    <span>Womens</span>
                                </Link>
                            </div>
                            <div className='col l-6'>
                                <Link
                                    className={cx('item')}
                                    href={'/womens/womens-jewelry'}>
                                    <img
                                        src={
                                            'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw38e03393/images/homepage/homepage-6/large.jpg'
                                        }
                                    />
                                    <span>Womens Jewelry</span>
                                </Link>
                            </div>
                            <div className='col l-12'>
                                <Link
                                    href={'/womens/womens-accessories/womens-accessories-shoes'}
                                    className={cx('item')}>
                                    <img
                                        src={
                                            'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw03797d20/images/homepage/homepage-1/large.jpg'
                                        }
                                    />
                                    <span>Shop Red</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('mens')} col l-4`}>
                        <Link
                            className={cx('item')}
                            href={'/mens/mens-clothing'}>
                            <img
                                src={
                                    'https://zygo-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwa83755d9/images/homepage/homepage-3/large.jpg'
                                }
                            />
                            <span>Mens</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
