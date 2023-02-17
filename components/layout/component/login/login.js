import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from '../../../ui/btn/btn';
import { useRef, useState } from 'react';
import Input from '../input';
const cx = classNames.bind(styles);
function Login() {
    //input value
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPassValue, setInputPassValue] = useState('');
    const emailValueRef = useRef();
    const passWordlValueRef = useRef();
    const confirmPassWordlValueRef = useRef();
    const inputs = [
        {
            id: 'login-form-email',
            label: 'Email',
            attr_id: 'email',
            classes: cx({ invalid: auth && auth.status === 'error' && auth.error.email && true }),
            ref: emailValueRef,
            placeholder: "Your's Email",
            value: inputEmailValue,
            required: true,
            errorMessage: auth && auth.status === 'error' && auth.error.email,
            onChange: (e) => {
                setInputEmailValue(e.target.value);
            },
            onBlur: (e) => {
                handleBlur(e.target.getAttribute('id'), emailValueRef);
            },
        },
        {
            id: 'login-form-pass',
            label: 'Password',
            attr_id: 'pass',
            ref: passWordlValueRef,
            placeholder: "Your's Password",
            value: inputPassValue,
            required: true,
            onChange: (e) => {
                setInputPassValue(e.target.value);
            },
            onBlur: (e) => {
                handleBlur(e.target.getAttribute('id'), passWordlValueRef);
            },
        },

    ];
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
        
    };

    return (
        <div className={cx('login')}>
            <div className={cx('login_wrapper')}>
                <form
                    onSubmit={handleOnSubmit}
                    className={cx('form-1')}>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            input={input}
                            auth={auth}
                        />
                    ))}

                    <Button maxWidth>Login</Button>
                </form>
            </div>
        </div>
    );
}
export default Login;
