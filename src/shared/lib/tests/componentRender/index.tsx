// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18ForTests';

interface OptionsRouter {
    router?: string;
}

function componentRender(Component: ReactNode, options: OptionsRouter = {}) {
    const { router = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18n}>{Component}</I18nextProvider>
        </MemoryRouter>,
    );
}

export default componentRender;
