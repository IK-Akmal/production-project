type classNamesProps = Array<
    null |
    undefined |
    string |
    Record<string, boolean | string>
>

export function classNames(...args: classNamesProps): string {
    return args.filter((item) => item).flatMap((arg) => {
        if (typeof arg === 'string') return arg;

        if (typeof arg === 'object') {
            return Object.keys(arg).filter((key) => arg[key]);
        }
        return '';
    }).join(' ');
}
