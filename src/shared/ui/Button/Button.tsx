import { classNames } from 'shared/lib/classNames';

import styled from './Button.module.scss';
import ButtonProps from './Button.props';

const Button = ({
    className, theme, type = 'button', ...props
}: ButtonProps) => (
    <button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={classNames(styled.button, className, styled[theme])}
    />
);

export default Button;
