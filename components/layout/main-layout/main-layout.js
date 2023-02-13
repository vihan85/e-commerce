import { Footer } from '~/components/layout/component/footer';
import { MainHeader } from '~/components/layout/component/header';
import classNames from 'classnames/bind';
import styles from './main-layout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div>
            <header className={cx('header', { 'ani-show-up-to-down': true })}>
                <MainHeader />
            </header>

            <main className={cx('container', { 'ani-hide-to-show': true })}>{children}</main>

            {<Footer />}
        </div>
    );
}
export default MainLayout;
