type classnameArg = Record<string, boolean | undefined>

const classnames = (args: classnameArg[]): string => {
    let builtClassnames: string = '';

    args.forEach((arg: classnameArg) => {
        if (typeof arg === 'string') {
            builtClassnames += `${arg} `;
        } else {
            const key: string = Object.keys(arg)[0];

            if (arg[key] === true) {
                builtClassnames += `${key} `;
            }
        }
    });

    return builtClassnames;
};

export default classnames;
