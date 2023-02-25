// Imports
import * as path from "node:path";
import TerserPlugin from 'terser-webpack-plugin';
import { loadMeta, jsonLoader } from "../helpers/helpers.js";

// Load Meta
const meta = loadMeta(import.meta);
await jsonLoader(path.normalize(path.resolve(meta.__dirname, "../package.json")), 'pack');

// Get version
const versionName = 'ver-' + pack.version.split('.').join('-');

// Get name
const outputFileName = pack.name.split('-')[0] + '-' + pack.version + '.min.js';

// Create a paths object
const paths = {

    "entry": "./index.js",
    "outputFilePath": `./dist/latest/${versionName}/esmodule`,

};

// Loop through paths and resolve
const keys = Object.keys(paths);
for (let i = 0; i < keys.length; i++) {

    const key = keys[i];
    paths[key] = path.normalize(path.resolve(paths[key]));

}

export const config = {
    entry: paths['entry'],
    mode: 'production',
    output: {
        library: { type: 'module' },
        filename: outputFileName,
        path: paths['outputFilePath'],
        globalObject: 'this',
    },

    experiments: {
        outputModule: true,
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_fnames: true,
                    keep_classnames: true,
                    compress: true,
                    mangle: false,
                    output: {
                        comments: false,
                    },

                },
            }),
        ],
    },

};
