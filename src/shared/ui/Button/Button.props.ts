import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export enum ThemeButton {
  Clear = 'clear',
  Outline = 'outline',
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ThemeButton;
}

export default ButtonProps;
