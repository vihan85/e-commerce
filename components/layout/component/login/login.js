import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from '../../../ui/btn/btn';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Login() {
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPassValue, setInputPassValue] = useState('');
    const [inputconfirmPassValue,setInputconfirmPassValue] = useState('')
    const emailValueRef = useRef();
    const passWordlValueRef = useRef();
    const confirmPassWordlValueRef = useRef()
    //validate
    const [auth, setAuth] = useState();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const validateValues = {
            email: emailValueRef.current.value,
            pass: passWordlValueRef.current.value,
            confirmPassWord: confirmPassWordlValueRef.current.value
        };
        fetch('api/validate', {
            method: 'POST',
            body: JSON.stringify(validateValues),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((dataerror) => {
                setAuth(dataerror);
            });
    };

    return (
        <div className={cx('login')}>
            <div className={cx('login_wrapper')}>
                <form
                    onSubmit={handleOnSubmit}
                    className={cx('form-1')}>
                    <div className={cx('form-group')}>
                        <label>Email</label>
                        <input
                            className={cx({ invalid: auth && auth.status === 'error' && auth.error.email && true })}
                            ref={emailValueRef}
                            placeholder="Your's Email"
                            value={inputEmailValue}
                            onChange={(e) => {
                                setInputEmailValue(e.target.value);
                            }}
                        />
                        <span>{auth && auth.status === 'error' && auth.error.email}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Password</label>
                        <input
                            className={cx({ invalid: auth && auth.status === 'error' && auth.error.pass && true })}
                            ref={passWordlValueRef}
                            value={inputPassValue}
                            onChange={(e) => {
                                setInputPassValue(e.target.value);
                            }}
                            placeholder="Your's Password"
                        />
                        <span>{auth && auth.status === 'error' && auth.error.pass}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Confirm password</label>
                        <input
                            className={cx({ invalid: auth && auth.status === 'error' && auth.error.confirmPass &&  true })}
                            ref={confirmPassWordlValueRef}
                            value={inputconfirmPassValue}
                            onChange={(e) => {
                                setInputconfirmPassValue(e.target.value);
                            }}
                            placeholder="Confirm your password"
                        />
                        <span>{auth && auth.status === 'error' && auth.error.confirmPass}</span>
                    </div>
                    <Button maxWidth>Login</Button>
                </form>
            </div>
        </div>
    );
}
export default Login;
