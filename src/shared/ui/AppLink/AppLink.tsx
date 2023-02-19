import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";

import styles from "./AppLink.module.scss";
import { AppLinkProps, AppLinkTheme } from "./AppLink.props";

const AppLink = ({
  className,
  theme = AppLinkTheme.Primary,
  ...props
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(styles.AppLink, className, styles[theme])}
      {...props}
    />
  );
};

export default AppLink;
