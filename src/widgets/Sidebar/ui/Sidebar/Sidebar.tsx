import { useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

import { Navbar } from 'widgets/Navbar';

import styles from './Sidebar.module.scss';
import SidebarProps from './Sidebar.props';

const Sidebar = ({ className, ...props }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // const { t } = useTranslation();

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
            <Navbar
                className={classNames({
                    [styles.collapsedNavbar]: collapsed,
                })}
            />
            <Button
                square
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={styles.collapsedBtn}
                theme={ButtonTheme.BackgroundInvertend}
                size={ButtonSize.Middle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.footer}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
};

export default Sidebar;
