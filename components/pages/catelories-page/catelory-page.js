import Link from 'next/link';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import styles from './catelory-page.module.scss';
const cx = classNames.bind(styles);
function CateloryPage({ dataCateleryTitle, router }) {
    const result = dataCateleryTitle.map((menu) => {
        if (menu.c_catelories && menu.c_id === router.query['catelory-title']) {
            return (
                <div
                    key={menu.c_id}
                    className={cx('container')}>
                    {menu.c_headerbanner && (
                        <div className={cx('container_catelory-image')}>
                            <Link href={`/${router.query['catelory-title']}/${router.query['catelory-title']}`}>
                                <img src={menu.c_headerbanner} />
                            </Link>
                            <h1 className={cx('container_catelory-title')}>
                                <span>{menu.c_name}</span>
                            </h1>
                        </div>
                    )}
                    <div className={cx('grid', { wide: menu.c_headerbanner })}>
                        <ul className={`${cx('container_catelory-title-list')} row`}>
                            {menu.c_catelories.map((item) => {
                                return (
                                    <li
                                        key={item.c_id}
                                        className='col l-4'>
                                        <Link href={`/${router.query['catelory-title']}/${item.c_id}`}>
                                            <img
                                                src={item.c_headerbanner}
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
    });

    return result;
}
export default CateloryPage;
