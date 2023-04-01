import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ThemeButton.Clear} onClick={toggleLang}>
            {t('lang')}
        </Button>
    );
};

export default LangSwitcher;
