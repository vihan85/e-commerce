import { useRef, useState } from "react";

import classNames from 'classnames/bind';
import styles from '../styles/auth.module.scss';
const cx = classNames.bind(styles);

function Auth() {
    const inputEmail = useRef()
    const inputpassword = useRef()
    
    const handeleSubmit = (e) => {
        e.preventDefault()
        const email = inputEmail.current.value
        const password = inputpassword.current.value
        fetch('api/authen/singup', {
            method: 'POST',
            body: JSON.stringify({
                email:email,
                password: password}),
            headers: {
                'Content-Type': 'application/json',
            },
        }). then()
        .catch(err=>{
            console.log(err)
        })
    }
    return (
     <div className={cx('container')}>
        <form onSubmit={handeleSubmit} className={cx('auth-form')}>
        <div class={cx("form-group")}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input ref={inputEmail} class="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class={cx("form-group")}>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input ref={inputpassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
        </form>
     </div>
    );
}
export default Auth