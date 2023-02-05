type classNamesProps = (string | Record<string, boolean | string>)[]

export function classNames(...args: classNamesProps): string {

    return args.filter(item => item).flatMap((arg) => {
        if (typeof arg === "string")
            return arg;
        else if (typeof arg === "object") {
            return Object.keys(arg).filter((key) => arg[key]);
        }
    }).join(" ")
}



