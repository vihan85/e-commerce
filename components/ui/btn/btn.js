import classNames from 'classnames/bind';
import styles from './btn.module.scss';
const cx = classNames.bind(styles);
function Button({ children, onClick, maxWidth, marTop }) {
    const classes = cx('btn', {
        maxWidth,
        marTop,
    });
    return (
        <button
            onClick={onClick}
            className={classes}>
            {children}
        </button>
    );
}
export default Button;
