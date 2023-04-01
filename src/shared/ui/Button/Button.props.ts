import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export enum ThemeButton {
  Clear = 'clear',
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ThemeButton;
}

export default ButtonProps;
