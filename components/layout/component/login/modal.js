import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './modal.module.scss';
import Overlay from './overlay';
const cx = classNames.bind(styles);
function Modal({ children }) {
    const [login, createAcount,btn] = children;

    const [borderModal, setBorderModal] = useState(true);
    return (
        <div className={cx('modal-container')}>
            <Overlay />
            <div className={cx('modal-wrapper')}>
                <div className={cx('modal-content')}>
                    <header>
                        <p
                            className={cx({ borderModalTitle: borderModal })}
                            onClick={() => {
                                setBorderModal(true);
                            }}>
                            Login
                        </p>
                        <p
                            className={cx({ borderModalTitle: !borderModal })}
                            onClick={() => {
                                setBorderModal(false);
                            }}>
                            Create Account
                        </p>
                    </header>
                    <div>{borderModal ? login : createAcount}</div>
                    {btn}
                </div>
            </div>

        </div>
    );
}
export default Modal;
