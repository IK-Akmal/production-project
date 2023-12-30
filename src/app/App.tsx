import { classNames } from 'shared/lib/classNames';
import Modal from 'shared/ui/Modal/Modal';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Modal />
            <AppRouter />
        </div>
    );
};

export default App;
