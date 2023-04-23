import webpack from 'webpack';

import { BuildOptions } from './types/config';
import cssBuildLoader from './loaders/CssBuildLoader';
import svgBuildLoader from './loaders/svgBuildLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = svgBuildLoader();

    const babelLoader:webpack.RuleSetRule = {

        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },

    };

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
    };

    const cssLoader: webpack.RuleSetRule = cssBuildLoader(isDev);

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2?)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
