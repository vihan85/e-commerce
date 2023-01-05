/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './catelory-page.module.scss';
const cx = classNames.bind(styles);
function CateloryPage({ menu, cateloryId }) {
    console.log(menu);
    if (menu !== undefined) {
        return (
            <div className={cx('container')}>
                {menu.c_headerbanner && (
                    <div className={cx('container_catelory-image')}>
                        <img src={menu.c_headerbanner} />

                        <h1 className={cx('container_catelory-title')}>
                            <span>{menu.c_name}</span>
                        </h1>
                    </div>
                )}
                <div className={cx('grid', { wide: menu.c_headerbanner })}>
                    <ul className={`${cx('container_catelory-title-list')} row`}>
                        {menu.c_catelories &&
                            menu.c_catelories.map((item) => {
                                return (
                                    <li
                                        key={item.c_id}
                                        className='col l-4'>
                                        <Link href={`/${cateloryId}/${item.c_id}`}>
                                            <img
                                                src={item.c_headerbanner && item.c_headerbanner}
                                                alt='/'
                                            />
                                            <h2 className={cx('container_catelory-title-item')}>{item.c_name}</h2>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}
export default CateloryPage;
