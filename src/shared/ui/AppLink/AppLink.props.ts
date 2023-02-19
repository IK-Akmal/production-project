import { LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  Primary = "primary",
  Secondary = "secondary",
}

export interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}
