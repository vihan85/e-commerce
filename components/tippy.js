import TippyHeadless from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './layout/layout-cpn/main-header.module.scss';

const cx = classNames.bind(styles);
function Tippy({ render, children, placement, offset }) {
    return (
        <TippyHeadless
            interactive={true}
            placement={placement}
            render={render}
            offset={offset}>
            {children}
        </TippyHeadless>
    );
}
export default Tippy;
