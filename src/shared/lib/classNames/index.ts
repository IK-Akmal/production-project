type classNamesProps = Array<
    null | undefined | string | Record<string, boolean | string | null | undefined>
>;

export function classNames(...args: classNamesProps): string {
    return args
        .filter((item) => item)
        .flatMap((arg) => {
            if (typeof arg === 'string') return arg;

            if (arg && typeof arg === 'object') {
                return Object.keys(arg).filter((key) => arg[key]);
            }
            return '';
        })
        .join(' ');
}
