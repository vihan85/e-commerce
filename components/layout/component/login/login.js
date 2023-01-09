import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from '../../../ui/btn/btn';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Login() {
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPassValue, setInputPassValue] = useState('');
    const [inputconfirmPassValue, setInputconfirmPassValue] = useState('');
    const emailValueRef = useRef();
    const passWordlValueRef = useRef();
    const confirmPassWordlValueRef = useRef();
    //validate
    const [auth, setAuth] = useState();
    const api = (validateValues) => {
        fetch('api/auth', {
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
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const validateValues = {
            email: emailValueRef.current.value,
            pass: passWordlValueRef.current.value,
            confirmPassWord: confirmPassWordlValueRef.current.value,
        };
        api(validateValues);
    };
    const handleBlur = (id, ref) => {
        const keyId = id.split('-')[id.split('-').length - 1];
        if (id.includes(keyId) && keyId !== 'confirmPassWord') {
            const validateValues = {
                [keyId]: ref.current.value,
            };

            api(validateValues);
        }
        if (id.includes(keyId) && keyId == 'confirmPassWord') {
            const validateValues = {
                [keyId]: ref.current.value,
                pass: passWordlValueRef.current.value,
            };

            api(validateValues);
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('login_wrapper')}>
                <form
                    onSubmit={handleOnSubmit}
                    className={cx('form-1')}>
                    <div className={cx('form-group', 'required')}>
                        <label htmlFor='login-form-email'>Email</label>
                        <input
                            id='login-form-email'
                            className={cx({ invalid: auth && auth.status === 'error' && auth.error.email && true })}
                            ref={emailValueRef}
                            placeholder="Your's Email"
                            value={inputEmailValue}
                            onChange={(e) => {
                                setInputEmailValue(e.target.value);
                            }}
                            onBlur={(e) => {
                                handleBlur(e.target.getAttribute('id'), emailValueRef);
                            }}
                        />
                        <span>{auth && auth.status === 'error' && auth.error.email}</span>
                    </div>
                    <div className={cx('form-group', 'required')}>
                        <label htmlFor='login-form-pass'>Password</label>
                        <input
                            onBlur={(e) => {
                                handleBlur(e.target.getAttribute('id'), passWordlValueRef);
                            }}
                            id='login-form-pass'
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
                    <div className={cx('form-group', 'required')}>
                        <label htmlFor='login-form-confirmPassWord'>Confirm password</label>
                        <input
                            onBlur={(e) => {
                                handleBlur(e.target.getAttribute('id'), confirmPassWordlValueRef);
                            }}
                            id='login-form-confirmPassWord'
                            className={cx({ invalid: auth && auth.status === 'error' && auth.error.confirmPass && true })}
                            ref={confirmPassWordlValueRef}
                            value={inputconfirmPassValue}
                            onChange={(e) => {
                                setInputconfirmPassValue(e.target.value);
                            }}
                            placeholder='Confirm your password'
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
