import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ThemeSwitcherProps extends Omit<ButtonProps, 'onClick'> {}

export default ThemeSwitcherProps;
