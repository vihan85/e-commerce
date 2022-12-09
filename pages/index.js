import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames/bind';
import style from '../styles/Home.module.scss';
const cx = classNames.bind(style);
export default function Home() {
    return (
        <div className={styles.container}>
            <h1> home page </h1>
        </div>
    );
}
