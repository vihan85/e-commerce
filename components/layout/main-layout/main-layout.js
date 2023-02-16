import { Footer } from '~/components/layout/component/footer';
import { MainHeader } from '~/components/layout/component/header';
import classNames from 'classnames/bind';
import styles from './main-layout.module.scss';
import { createContext, useContext, useState, useMemo  } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);
const ProviderCart = createContext()
function MainLayout({ children }) {
    const [updateCart, setUpdateCart] = useState(false)
    const updateQualityCart = () => {setUpdateCart(!updateCart)}
    const router = useRouter()
    const routerId = router.query.provariations 
    return (
        <ProviderCart.Provider value = {updateQualityCart}>
            <div>
                <header className={cx('header', { 'ani-show-up-to-down': true })}>
                    <MainHeader />
                </header>
                {useMemo(() => (
                    <main className={cx('container', { 'ani-hide-to-show': true })}>{children}</main>
                ),[routerId])}
                {useMemo(() => (
                    <Footer />
                ),[routerId])}
            </div>
        </ProviderCart.Provider>
    );
}
export default MainLayout;
export {ProviderCart}
