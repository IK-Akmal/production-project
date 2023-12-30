import path from 'path';

import webpack from 'webpack';

import svgBuildLoader from '../build/loaders/svgBuildLoader';
import cssBuildLoader from '../build/loaders/cssBuildLoader';

type Props = {
    config:webpack.Configuration
}

const isRuleSet = (
    arg:webpack.ModuleOptions['rules'][number],
): arg is webpack.RuleSetRule => {
    if (!arg) return false;

    return typeof arg === 'object' && 'test' in arg;
};

const isRegExp = (arg:webpack.RuleSetRule['test']):arg is RegExp => arg instanceof RegExp;

export default ({ config }:Props) => {
    const src = path.resolve(__dirname, '..', '..', 'src');
    const isDev = true;

    const fileLoaderRule = config.module.rules.find(
        (rule) => isRuleSet(rule) && isRegExp(rule.test) && rule.test.test('.svg'),
    );

    if (isRuleSet(fileLoaderRule)) { fileLoaderRule.exclude = /\.svg$/; }

    config.resolve.modules.push(src);
    config.resolve.modules.push('node_modules');
    config.resolve.extensions.push('ts', 'tsx');
    config.module.rules.push(svgBuildLoader());
    config.module.rules.push(cssBuildLoader(isDev));

    return config;
};
