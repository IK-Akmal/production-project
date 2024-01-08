import { Outlet } from 'react-router-dom';

import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';

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

    const title = 'Open';
    const body = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio provident
    officia distinctio alias hic doloremque? Magni totam officia ea, odit tempora
    maxime corrupti sit nesciunt eveniet tenetur quam adipisci!`;

    return (
        <section className={styles.layout}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.content}>
                <Outlet />
                <button onClick={handleOpenModal} type="button">
                    {title}
                </button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    {body}
                </Modal>
            </main>
        </section>
    );
};

export default Layout;
