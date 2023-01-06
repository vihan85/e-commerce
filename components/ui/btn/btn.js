import classNames from 'classnames/bind';
import styles from './btn.module.scss';
const cx = classNames.bind(styles);
function Button({ children, onClick, maxWidth }) {
    const classes = cx('btn',{
        maxWidth
    })
    return (
        <button
            onClick={onClick}
            className={classes}>
            {children}
        </button>
    );
}
export default Button;
