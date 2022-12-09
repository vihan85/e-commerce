import classNames from 'classnames/bind';
import styles from './main-header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';

const cx = classNames.bind(styles);
const menuItem = [
    {
        title: 'Womens',
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                title: 'clothing 1',
                icon: <FontAwesomeIcon icon={faCaretDown} />,
                children: [
                    {
                        title: 'Outfits',
                    }
                ],
            },
        ],
    },
    {
        title: 'Mens',
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                title: 'clothing 2',
                icon: <FontAwesomeIcon icon={faCaretDown} />,
                children: [
                    {
                        title: 'Outfits',
                    },
                ],
            },{
                title: ' short',
                icon: <FontAwesomeIcon icon={faCaretDown} />,
                children: [
                    {
                        title: 'Outfits',
                    },
                ],
            },
        ],
    },
    {
        title: 'Electronics',
    },
    {
        title: 'Top Saller',
        icon: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                title: 'clothing 3',
                icon: <FontAwesomeIcon icon={faCaretDown} />,
                children: [
                    {
                        title: 'Outfits',
                    },
                ],
            },
        ],
    },
];
function MainHeader() {
    return (
        <header className={cx('main-header')}>
            <div className={cx('main-header_comtainer')}>
                <Menu data={menuItem} />
            </div>
        </header>
    );
}
export default MainHeader;
