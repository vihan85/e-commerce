import Link from 'next/link';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import styles from './catelory-page.module.scss';
import { element } from 'prop-types';
const cx = classNames.bind(styles);
function CateloryPage({ dataCateleryTitle, router }) {
    const result = dataCateleryTitle.map((menu) => {
        if (menu.c_catelories && menu.c_id === 'womens') {
            console.log(menu);
            return (
                <div
                    key={menu.c_id}
                    className={cx('container')}>
                    <Link
                        className={cx('container_catelory-image')}
                        href={'/'}>
                        <img src={menu.c_headerbanner} />
                    </Link>
                    <div className='grid wide'>
                        <ul className={`${cx('container_catelory-title-list')} row`}>
                            {menu.c_catelories.map((item) => {
                                return (
                                    <li
                                        key={item.c_id}
                                        className='col l-4'>
                                        <img
                                            src={item.c_headerbanner}
                                            alt='/'
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            );
        }
    });

    return result;
}
export default CateloryPage;
