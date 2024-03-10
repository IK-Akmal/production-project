import styles from './Button.module.scss';
import ButtonProps from './Button.props';

import { ButtonSize } from './Button.enums';

import { classNames } from '@/shared/lib/classNames';

const Button = ({
    className,
    type = 'button',
    theme,
    size = ButtonSize.Small,
    square,
    ...props
}: ButtonProps) => (
    <button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={
            classNames(
                className,
                styles.button,
                theme && styles[theme],
                styles[size],
                {
                    [styles.square]: Boolean(square),
                },
            )
        }
    />
);

export default Button;
