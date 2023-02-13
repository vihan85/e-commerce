import classNames from 'classnames/bind';
import styles from './input.module.scss';
const cx = classNames.bind(styles);
function Input({ input, auth }) {
    return (
        <div className={cx('form-group', { required: input.required })}>
            <label htmlFor={input.id}>{input.label}</label>
            <input
                id={input.id}
                className={cx({ invalid: auth && auth.status === 'error' && auth.error[input.attr_id] && true })}
                ref={input.ref}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                onBlur={input.onBlur}
            />
            <span>{auth && auth.status === 'error' && auth.error[input.attr_id]}</span>
        </div>
    );
}
export default Input;
