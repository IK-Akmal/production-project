import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

import styles from './PageError.module.scss';

const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <section className={styles.pageError}>
            <p>{t('errorMessage')}</p>
            <Button onClick={reloadPage}>{t('updatePage')}</Button>
        </section>
    );
};

export default PageError;
