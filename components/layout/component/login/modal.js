import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import Overlay from './overlay';
const cx = classNames.bind(styles);
function Modal({ children }) {
    return (
        <div className={cx('modal-container')}>
            <Overlay />
            <div className={cx('modal-wrapper')}>
                <div className={cx('modal-content')}>
                    <header>
                        <p> Login</p>
                        <p>Create Account</p>
                    </header>
                    <div>{children}</div>

                </div>
            </div>
        </div>
    );
}
export default Modal;
