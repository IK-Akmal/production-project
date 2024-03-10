import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

import { Sidebar } from '@/widgets/Sidebar';
import { Header } from '@/widgets/Header';

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
