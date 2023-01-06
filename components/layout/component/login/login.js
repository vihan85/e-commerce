import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from '../../../ui/btn/btn';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('login_wrapper')}>
                <form className={cx('form-1')}>
                    <div className={cx('form-group')}>
                        <label>Email</label>
                        <input placeholder="Your's Email" />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Password</label>
                        <input placeholder="Your's Password" />
                    </div>
                    <Button maxWidth>Login</Button>
                </form>
            </div>
        </div>
    );
}
export default Login;
