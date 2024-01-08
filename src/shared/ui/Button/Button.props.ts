import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { ButtonSize, ButtonTheme } from './Button.enums';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export default ButtonProps;
