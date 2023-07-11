import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./BuildPlugins";
import {buildLoaders} from "./BuildLoaders";
import {buildResolvers} from "./BuildResolvers";
import {buildDevServer} from "./BuildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    }
}
