import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

type LangSwitcherProps = {
    short?: boolean;
};

const LangSwitcher = ({ short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ButtonTheme.Clear} onClick={toggleLang}>
            {t(short ? 'shortLang' : 'lang')}
        </Button>
    );
};

export default LangSwitcher;
