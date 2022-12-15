import Footer from './layout-cpn/footer';
import MainHeader from './layout-cpn/main-header';
import classNames from 'classnames/bind';
import styles from './main-layout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div>
            <MainHeader />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
export default MainLayout;
