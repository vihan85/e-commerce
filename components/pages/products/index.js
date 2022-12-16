import classNames from 'classnames/bind';
import styles from './products.module.scss';
import { ProductSidebar } from '~/components/pages/products/sidebar';
import { ProductContent } from './product-content';
const cx = classNames.bind(styles);

function ProductDetailPage() {
    return (
        <div className={cx('container', 'grid ')}>
            <div className={cx('wrapper')}>
                <div className={'col c-3'}>
                    <ProductSidebar />
                </div>
                <div className={'col c-9'}>
                    <ProductContent />
                </div>
            </div>
        </div>
    );
}
export default ProductDetailPage;
