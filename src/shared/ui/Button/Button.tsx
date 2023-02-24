import { classNames } from "shared/lib/classNames";
import styled from "./Button.module.scss";
import ButtonProps from "./Button.props";
const Button = ({ className, theme, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(styled.button, className, styled[theme])}
      {...props}
    />
  );
};

export default Button;
