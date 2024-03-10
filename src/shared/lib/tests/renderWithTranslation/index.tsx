// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18ForTests';

function renderWithTranslation(Component:ReactNode) {
    return render(
        <I18nextProvider i18n={i18n}>
            {Component}
        </I18nextProvider>,
    );
}

export default renderWithTranslation;
