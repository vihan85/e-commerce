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
                        'http://localhost:3000/_next/image?url=https%3A%2F%2Fedge.disstg.commercecloud.salesforce.com%2Fdw%2Fimage%2Fv2%2FZYGO_001%2Fon%2Fdemandware.static%2F-%2FSites-apparel-m-catalog%2Fdefault%2Fdw73cfca1f%2Fimages%2Flarge%2FPG.10247474.JJP49XX.PZ.jpg&w=384&q=75'
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
                                            'http://localhost:3000/_next/image?url=https%3A%2F%2Fedge.disstg.commercecloud.salesforce.com%2Fdw%2Fimage%2Fv2%2FZYGO_001%2Fon%2Fdemandware.static%2F-%2FSites-apparel-m-catalog%2Fdefault%2Fdw73cfca1f%2Fimages%2Flarge%2FPG.10247474.JJP49XX.PZ.jpg&w=384&q=75'
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
                                            'http://localhost:3000/_next/image?url=https%3A%2F%2Fedge.disstg.commercecloud.salesforce.com%2Fdw%2Fimage%2Fv2%2FZYGO_001%2Fon%2Fdemandware.static%2F-%2FSites-apparel-m-catalog%2Fdefault%2Fdw73cfca1f%2Fimages%2Flarge%2FPG.10247474.JJP49XX.PZ.jpg&w=384&q=75'
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
                                            'http://localhost:3000/_next/image?url=https%3A%2F%2Fedge.disstg.commercecloud.salesforce.com%2Fdw%2Fimage%2Fv2%2FZYGO_001%2Fon%2Fdemandware.static%2F-%2FSites-apparel-m-catalog%2Fdefault%2Fdw73cfca1f%2Fimages%2Flarge%2FPG.10247474.JJP49XX.PZ.jpg&w=384&q=75'
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
                                    'http://localhost:3000/_next/image?url=https%3A%2F%2Fedge.disstg.commercecloud.salesforce.com%2Fdw%2Fimage%2Fv2%2FZYGO_001%2Fon%2Fdemandware.static%2F-%2FSites-apparel-m-catalog%2Fdefault%2Fdw73cfca1f%2Fimages%2Flarge%2FPG.10247474.JJP49XX.PZ.jpg&w=384&q=75'
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
