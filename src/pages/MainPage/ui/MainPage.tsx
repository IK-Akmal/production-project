import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();

  return <div>{t("mainPage")}</div>;
}

export default MainPage;
