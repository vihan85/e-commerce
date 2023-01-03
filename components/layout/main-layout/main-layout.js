import { Footer } from '~/components/layout/component/footer';
import { MainHeader } from '~/components/layout/component/header';
import classNames from 'classnames/bind';
import styles from './main-layout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div>
            <MainHeader />

            <main>{children}</main>

            {<Footer />}
        </div>
    );
}
export default MainLayout;
