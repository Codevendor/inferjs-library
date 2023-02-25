/**
 * Builds the InferJS-Library in all types (commonjs, esmodule, script) and compresses code.
 * @name build.js
 */

// Imports
import fs from "node:fs";
import path from "node:path";
import webpack from "webpack";
import * as esmodule from "../configs/webpack.esmodule.config.js";
import * as commonjs from "../configs/webpack.commonjs.config.js";
import * as script from "../configs/webpack.script.config.js";
import { loadMeta, jsonLoader } from "../helpers/helpers.js";

// Load Meta
const meta = loadMeta(import.meta);
await jsonLoader(path.normalize(path.resolve(meta.__dirname, "../package.json")), 'pack');

// Declare Variables
let cmd;

// Get version
const versionName = 'ver-' + pack["version"].split('.').join('-');

// Create a paths object
const paths = {

    "latest": "./dist/latest",
    "latest/version": `./dist/latest/${versionName}`,
    "latest/version/commonjs": `./dist/latest/${versionName}/commonjs`,
    "latest/version/esmodule": `./dist/latest/${versionName}/esmodule`,
    "latest/version/script": `./dist/latest/${versionName}/script`,
    "versions": "./dist/versions",
    "versions/version": `./dist/versions/${versionName}`,
    "versions/version/commonjs": `./dist/versions/${versionName}/commonjs`,
    "versions/version/esmodule": `./dist/versions/${versionName}/esmodule`,
    "versions/version/script": `./dist/versions/${versionName}/script`

};

// Loop through paths and resolve
const keys = Object.keys(paths);
for (let i = 0; i < keys.length; i++) {

    const key = keys[i];
    paths[key] = path.normalize(path.resolve(paths[key]));

}

//console.log(paths);
//process.exit();


/**
 * Builds the output file
 * @param {string} outputType - The output type (esmodule, commonjs, script).
 * @param {object} webpackConf - The webpack config object.
 */
function build(outputType, webpackConf) {

    // Build latest/version
    console.log(`Running: InferJS Library (${outputType}) webpack build ...`);
    const wpack = webpack(webpackConf);
    wpack.run((err, stats) => {

        // Error occurred
        if (err) { console.error(err); return; }

        // Wpack close event
        wpack.close((closeErr) => {

            // Error occurred
            if (closeErr) { console.error(err); return; }

            console.log(`Finished: InferJS Library (${outputType}) webpack build ...`);

            // Copy file
            const filePath = path.normalize(path.join(webpackConf.output.path, webpackConf.output.filename));
            const outputFilePath = path.normalize(path.join(paths['versions/version/' + outputType], webpackConf.output.filename));

            console.log(`Copying (${outputType}) to version directory ...\nFile: ${filePath}\nCopy: (${outputFilePath})\n`);

            // Copy file from latest to versions
            fs.copyFile(filePath, outputFilePath, (copyErr) => {

                // Error Occurred
                if (copyErr) { console.error(copyErr); return; }

                console.log(`Finished Copying (${outputType}).`);
            });

        });

        // Done processing write webpack results.
        console.log(
            stats.toString({
                chunks: false, // Makes the build much quieter
                colors: true, // Shows colors in the console
            })
        );
    });

}

// Build configs
build('esmodule', esmodule.config);
build('commonjs', commonjs.config);
build('script', script.config);
