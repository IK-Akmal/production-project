import { Outlet } from 'react-router-dom';

import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';

import styles from './Layout.module.scss';

const Layout = () => (
    <section className={styles.layout}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <main className={styles.content}>
            <Outlet />
        </main>
    </section>
);

export default Layout;
