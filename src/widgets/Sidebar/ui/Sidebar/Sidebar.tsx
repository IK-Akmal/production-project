import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

import styles from './Sidebar.module.scss';
import SidebarProps from './Sidebar.props';

const Sidebar = ({ className, ...props }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((state) => !state);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(styles.sidebar, className, {
                [styles.collapsed]: collapsed,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('toggle')}</Button>

            <div className={styles.footer}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
};

export default Sidebar;
