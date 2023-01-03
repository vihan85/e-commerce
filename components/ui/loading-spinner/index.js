import classNames from 'classnames/bind';
import styles from './loading-spinner.module.scss';
const cx = classNames.bind(styles);
function LoadingSpinner() {
    return (
        <div className={`${cx('container')} grid spinner-center`}>
            <div className='row'>
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
export default LoadingSpinner;
