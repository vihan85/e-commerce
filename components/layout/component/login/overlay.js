import classNames from "classnames/bind";
import styles from './overlay.module.scss'
const cx = classNames.bind(styles)
function Overlay ({children}){
    return (
        <div className={cx('overlay')}></div>
    )
}
export default Overlay