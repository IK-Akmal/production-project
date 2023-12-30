import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import Modal from 'shared/ui/Modal/Modal';
import { useState } from 'react';

import styles from './Layout.module.scss';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    console.log({ isOpen });
    return (
        <section className={styles.layout}>
            <Navbar className={styles.navbar} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.content}>
                <Outlet />
                <button onClick={handleOpenModal} type="button">Open</button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio provident officia distinctio alias hic doloremque? Magni totam officia ea, odit tempora maxime corrupti sit nesciunt eveniet tenetur quam adipisci!
                </Modal>
            </main>
        </section>
    );
};

export default Layout;
