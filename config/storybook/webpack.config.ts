import path from 'path';

import webpack from 'webpack';

import svgBuildLoader from '../build/loaders/svgBuildLoader';
import cssBuildLoader from '../build/loaders/CssBuildLoader';

type Props = {
    config:webpack.Configuration
}

const isRegExp = (arg:any):arg is RegExp => {
    if (!arg) return false;

    return arg instanceof RegExp;
};

export default ({ config }:Props) => {
    const src = path.resolve(__dirname, '..', '..', 'src');
    const isDev = true;

    const fileLoaderRule = config.module.rules.find((rule) => {
        const isNotString = typeof rule !== 'string';

        return isNotString && isRegExp(rule.test) && rule.test.test('.svg');
    });

    if (typeof fileLoaderRule !== 'string') { fileLoaderRule.exclude = /\.svg$/; }

    config.resolve.modules.push(src);
    config.resolve.modules.push('node_modules');
    config.resolve.extensions.push('ts', 'tsx');
    config.module.rules.push(svgBuildLoader());
    config.module.rules.push(cssBuildLoader(isDev));

    return config;
};
