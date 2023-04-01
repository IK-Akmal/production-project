import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import styles from './Layout.module.scss';

const Layout = () => (
    <section className={styles.layout}>
        <Navbar className={styles.navbar} />
        <Sidebar className={styles.sidebar} />
        <main className={styles.content}>
            <Outlet />
        </main>
    </section>
);

export default Layout;
