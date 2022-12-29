import classNames from 'classnames/bind';
import styles from './btn.module.scss';
const cx = classNames.bind(styles);
function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={cx('btn')}>
            {children}
        </button>
    );
}
export default Button;
