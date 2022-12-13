import classNames from 'classnames/bind';
import styles from './product-detail-page.module.scss';
import ProductSidbar from './product-sidebar';
import ProductContent from '../products/product-content'
const cx = classNames.bind(styles);

function ProductDetailPage() {
    return (
        <div className={cx('container', 'grid ')}>
            <div className={cx('wrapper')}>
                <div className={'col c-3'}>
                    <ProductSidbar />
                </div>
                <div className={'col c-9'}>
                    <ProductContent />
                </div>
            </div>
        </div>
    );
}
export default ProductDetailPage;
