import webpack from 'webpack';

export default function svgBuildLoader():webpack.RuleSetRule {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}
