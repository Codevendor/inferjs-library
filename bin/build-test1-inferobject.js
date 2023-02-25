/**
 * Builds the test1 esmodule example and InferObject.
 * @name build-test1-esm-inferobject.mjs
 */

// Imports
import { exec } from "node:child_process";
import path from "node:path";

// Create a paths object
const paths = {

    "compiler": "../inferjs-compiler/bin/main.js",
    "input": "./tests/test1.js",
    "output": "./tests/inferobjects/test1.io.js"
};

// Loop through paths and resolve
const keys = Object.keys(paths);
for (let i = 0; i < keys.length; i++) {

    const key = keys[i];
    paths[key] = path.normalize(path.resolve(paths[key]));

}

// Set command to exec for compiling InferObject
const compiler = `node ${paths['compiler']}`;
const cmd = `inferjs-compiler -f ${paths['input']} --output-options-flags='w' --output-options-module='esm' -o ${paths['output']}`;


// Execute compiler to build inferobject for test1
exec(cmd, (error, stdout, stderr) => {
    
    // Check for error
    if (error) {
        console.log(error);
        return;
    }

    // Check for std error
    if (stderr) {
        console.log(stderr);
        return;
    } 

    console.log(stdout);

});
