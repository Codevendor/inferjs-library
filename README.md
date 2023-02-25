[inferjs]: https://github.com/Codevendor/inferjs
[inferjs-library]: https://github.com/Codevendor/inferjs-library
[inferjs-compiler]: https://github.com/Codevendor/inferjs-compiler
[infer-object]: https://github.com/Codevendor/inferjs-library
[logo]: https://github.com/Codevendor/inferjs-library/blob/main/assets/images/inferjs-logo.png?raw=true
[arrow]: https://github.com/Codevendor/inferjs-library/blob/main/assets/images/arrowright.png?raw=true
[library-docs]: https://github.com/Codevendor/inferjs-library/
[library-issues]: https://github.com/Codevendor/inferjs-library/issues
[compiler-docs]: https://github.com/Codevendor/inferjs-compiler/
[compiler-issues]: https://github.com/Codevendor/inferjs-compiler/issues
[unhandled-error]: https://github.com/Codevendor/inferjs-library/blob/main/src/errors/infer-unhandled-error.js
[type-error]: https://github.com/Codevendor/inferjs-library/blob/main/src/errors/infer-type-error.js
[expect-error]: https://github.com/Codevendor/inferjs-library/blob/main/src/errors/infer-expect-error.js 

![InferJS Library][logo]

<!-- ABOUT THE PROJECT -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Overview

[**InferJS-Library**][inferjs-library] allows you to easily add runtime type checking by utilizing **JSDoc** multi-line comments in both client and server side **JavaScript**. The library is part of a bigger project named [**InferJS**][inferjs]. 

[**InferJS**][inferjs] is provided with an [**InferJS-Compiler**][inferjs-compiler]. The compiler interprets your **JSDoc** comments from your source code and compiles them into an [**InferObject**][infer-object] file, that you can import into any **JavaScript** file. 

With this library, you can also enable extended type checking and narrow down your data types with `@infer` expectation rules. Check out the examples below, to see how [**InferJS**][inferjs] can save you time and money from costly bugs through development and release.


### Built With

* [JSDoc Version 3+](https://jsdoc.app/)
* [Node.js Version 12+](https://nodejs.org/)
* [NPM Version 5+](https://www.npmjs.com/)
* [Webpack Version 5+](https://webpack.js.org/)
* [Visual Studio Code](https://code.visualstudio.com/)


<!-- GETTING STARTED -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Installation

To install the latest version of [**InferJS-Library**][inferjs-library] locally with `npm`:
#### Install: [Locally]()
```sh
npm install inferjs-library
```

#### Install: [Globally]()
```sh
npm install -g inferjs-library
```

**_Optional_**: If you would like to download the repo source code with `git`:
```sh
git clone https://github.com/Codevendor/inferjs-library.git
```

## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Browser Version Instructions

If you would like to use the [InferJS-Library] from the browser, please select a `precompiled/minified` version and module type from the `dist` folder. There are 3 types of modules supported (`esmodule`,`commonjs`,`script`). The `latest` folder contains the latest version of the library.  

### _Optional_: Compiling the Latest Version of [InferJS-Library][inferjs-library]
If you are missing the `dist` folder or would like to compile the latest version, follow the steps below.

#### Install Webpack
To build yourself you will need to install **Webpack version 5+** with the following commands. The commands need to be run from where the `package.json` is located. Or you can install them globally with the `-g` identifier.

#### Webpack Latest Install 
```sh
// Local Install
npm install --save-dev webpack
npm install --save-dev webpack-cli

or

// Global Install
npm install -g --save-dev webpack
npm install -g --save-dev webpack-cli
```

The latest version of **webpack 5+** automatically installs the **terser-webpack-plugin** with it. If it doesn't, you will need to install it as well, from where the `package.json` is located. The `Terser` plugin is used for `minimizing/compressing` the library code for use in the browser.

#### _Optional_ - Terser Webpack Plugin 
- Required if webpack 4-
```sh
npm install terser-webpack-plugin --save-dev
```

After the node modules under `devDependencies` are installed, you can run the build process from where the `package.json` is located.
```sh
npm run build
```

## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Compiling InferObject Files 

In order to use the [**InferJS-Library**][inferjs-library], you will need to compile an [**InferObject**][infer-object] with the [**InferJS-Compiler**][inferjs-compiler]. 

For more information on installing the [**InferJS-Compiler**][inferjs-compiler] and its usage [click here][inferjs-compiler]. 


<!-- USAGE EXAMPLES -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Usage

### Browser - Usage Instructions
Copy one of the minimized `inferjs-{version}.min.js` from the `dist` folder to your website. Copy the pre-compiled [**InferObject**]() file to your website, that was created with the [**InferJS-Compiler**][inferjs-compiler]. 

Add both to your webpage for type checking. You only need to recompile with the [**InferJS-Compiler**][inferjs-compiler], if you change your **JSDoc** multi-line comments, `@param`, `@type`, `@inferid` or `@infer` tags. 

Below are examples for using [**InferJS-Library**][inferjs-library] in your code.

#### Brower ESModule Import Example - Client side
```html
<script type="module">
  import { InferObject } from "./inferobject.js";
  import { InferJS } from "./esmodule/inferjs-{version}.min.js";
  const inferjs = new InferJS(InferObject);
</script>
```

#### Browser JavaScript Script Tag Sync Example - Client Side
```html
<script src="./inferobject.js"></script>
<script src="./script/inferjs-{version}.min.js"></script>
<script>
const inferjs = new InferJS(InferObject);
</script>
```

#### Node.js ESModule Import - Server Side
```js
import { InferObject } from "./inferobject.js";
import { InferJS } from "./esmodule/inferjs-{version}.min.js";
const inferjs = new InferJS(InferObject);
```

#### Node.js CommonJS Require - Server Side
```js
const InferObject = require("./inferobject.js");
const InferJS = require("./commonjs/inferjs-{version}.min.js");
const inferjs = new InferJS(InferObject);
```

There are many ways to utilize the [**InferJS-Library**][inferjs-library]. The example above, imports in the pre-compiled [**InferObject**]() file that was created with the [**InferJS-Compiler**][inferjs-compiler]. Intialize the [**InferJS-Library**][inferjs-library] class with the [**InferObject**]() file you want to use.
```js
// Intialize through constructor
const inferjs = new InferJS(InferObject);

// or intialize through property
const inferjs = new InferJS();
inferjs.inferObject = InferObject;
```

Once the [**InferJS-Library**][inferjs-library] and [**InferObject**]() file are included at the top of your file you can then utilize the type checking features. Below is an example of how to create a **JSDoc** multi-line comment for type checking.

#### Custom JSDoc Multiline Comment with Custom Infer Expectations

```js
/**
 * Test case scenario for JavaScript inferjs function.
 * @category tests
 * @function foo
 * @param {string} msg - The message to send through console.log().
 * @param {(number|string)} id - The id of the message.
 * @param {boolean} [send=true] - Whether to send your message.
 * @infer {string} msg {STRING-NOT-EMPTY} - Checks if string is not empty.
 * @inferid foo
 */
function foo(msg, id, send) {

    inferjs.check('foo', arguments);
}

// Example Normal Call
foo('test', 1234, true);
```


## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Type Checking with JSDoc [@param]()

The **JSDoc** tag `@param` below specifies a method's parameter type(s), name and description.
#### Fomart for [@param](): 
- **@param** {[_type_]()} paramName - _description_
- **@param** {([_type_]()|[_type_]())} paramName - _description_

##### Single type check example:
```js
/**
 * @param {string} msg - The message to send through console.log().
 */
```

##### Multi type check example:
```js
/**
 * @param {(null|string)} msg - The message to send through console.log().
 */
```

[**InferJS-Library**][inferjs-library] reads the precompiled [**InferObject**]() file 
and uses it to process all type checking and inferred expectations. 

Below is a list of `standard` and `extended types` that can be checked:

| Standard JS Types&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| :-- | :-- |
| [undefined]() | An undefined type: `undefined` |
| [null]()   | A null type: `null` |
| [boolean]()      |  A boolean type: `true` or `false` |
| [number]() | A number type: `1000` or `10.25` |
| [bigint]() | A big integer type: `1010101112233343545545545446n` |
| [string]() | A string type: `foo1` or `foo2` |
| [symbol]() | A symbol type: `Symbol` |
| [function]() | A function type: `function` |
| **Extended InferJS Types** | **Description** |
| [array]() | An array type: `[]` |
| [infinity]() | An infinity number type: `Infinity` |
| [nan]() | Not a number type: `NaN` |
| [arguments]() | The arguments object: `arguments`. |
| ["_className_"]() | A class name: `fooClass` |
| ["_functionName_"]() | A function name: `fooFunction` |
| ["_errorName_"]() | An error type: `Error` or `TypeError` or `errorName`  |

## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Expectation Checking with Tag [@infer]()

[**InferJS-Library**][inferjs-library] also allows for extended type checking with the custom `@infer` tag. Add one or multiple `@infer` tags to any parameter type. This will allow for narrowing your types down through expectations. 

Below is an simple example of `@infer`:
#### Fomart for [@infer](): 
- **@infer** {[_type_]()} paramName {[_expectation_]()} - _description_
- **@infer** {([_type_]()|[_type_]())} paramName {([_expectation_]()|[_expectation_]())} - _description_

```js
/**
 * @infer {string} msg {STRING-NOT-EMPTY} - Checks if string is not empty.
 */
```

The `@infer` tag is so versatile you can attach it to multiple types in a group and specify multiple narrowing and values to check against, like so:

```js
/**
 * @infer {(number|string)} msg {INT32|STRING-NOT-EMPTY} - Checks if string is not empty and is an integer32.
 * @infer {array} arrname {IN-ARRAY=a,b,c,d,e} - Checks if a,b,c,d is in array.
 * @infer {object} objname {PROPS=id,name} - Checks if objname has properties id and name.
 */
```

## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Tag [@infer]() Expectation Types

There are many extended expectation types for narrowing your types down with your `@infer` tags.

Below is a list of common rule expectation types:

| Expectation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| :-- | :-- |
| [STRING-NOT-EMPTY]() | Checks if a string is not empty. |
| [STRING-EMPTY]() | Checks if a string is empty. |
| [IS-BOOL]() | Checks if a string is a boolean, `true`, `false`, `yes`, `no`, `on`, `off`, `0`, `1`. |
| [BETWEEN]() | Checks if number is between two numbers. |
| [BETWEEN-INCLUSIVE]() | Checks if number is between two numbers and including equal to self. |
| [BETWEEN-BIGINT]() | Checks if string is between two big integers. |
| [BETWEEN-BIGINT-INCLUSIVE]() | Checks if a string is between two big integers including equal to self. |
| [GREATER-THAN]() | Checks if value is greater than. |
| [GREATER-THAN-EQUAL]() | Checks if value is greater than equal. |
| [LESS-THAN]() | Checks if value is less than. |
| [LESS-THAN-EQUAL]() | Checks if value is less than equal. |
| [REGEX]() | Checks if matches a regular expression. |
| [ALPHA]() | Checks if alpha characters. |
| [IS-NUMBER]() | Checks if a string is a number. |
| [IS-BIGINT]() | Checks if a string is a bigint. |
| [IS-NUMERIC]() | Checks if a string is numeric. |
| [ALPHA-NUMERIC]() | Checks if a string is alpha numeric. | 
| [IN-ARRAY-CI]() | Checks if in array list case insensitive. |
| [IN-ARRAY]() | Checks if in array list case sensitive. |
| [NOT-IN-ARRAY-CI]() | Checks if not in array list case insensitive. |
| [NOT-IN-ARRAY]() | Checks if not in array list case sensitive. |
| [EXTENDS-ALL]() | Checks if object extends all types. |
| [EXTENDS]() | Checks if object extends type. |
| [PROPS]() | Checks if object contains properties. |
| [ARRAY-NOT-EMPTY]() | Checks if array not empty. |
| [ARRAY-EMPTY]() | Checks if array is empty. |
| [ARRAY-TYPES]() | Checks if array items of are of exepected types. |
| [INT8]() | Checks for INT8: `-128` to `127` |
| [CHAR]() | ^ |
| [UINT8]() | Checks for UINT8: `0` to `255` |
| [UCHAR]() | ^ |
| [UNSIGNED-CHAR]() | ^ |
| [INT16]() | Checks for INT16: `-32768` to `32767` |
| [SHORT]() | ^ |
| [SHORT-INT]() | ^ |
| [SIGNED-SHORT]() | ^ |
| [UINT16]() | Check for UINT16: `0` to `65535` |
| [UNSIGNED-SHORT]() | ^ |
| [UNSIGNED-SHORT-INT]() | ^ |
| [USHORT]() | ^ |
| [INT32]() | Check for INT32: `-2147483648` to `2147483647` |
| [SIGNED-INT]() | ^ |
| [INT]() | ^ |
| [UINT32]() | Check for UINT32: `0` to `4294967295` |
| [UNSIGNED-INT]() | ^ |
| [UINT]() | ^ |
| [INT64]() | Check for INT64: `-9223372036854775808` to `9223372036854775807` |
| [SIGNED-LONG]() | ^ |
| [SIGNED-LONG-LONG]() | ^ |
| [LONG]() | ^ |
| [LONG-LONG]() | ^ |
| [UINT64]() | Check for UINT64: `0` to `18446744073709551615` |
| [UNSIGNED-LONG]() | ^ |
| [UNSIGNED-LONG-LONG]() | ^ |
| [ULONG]() | ^ |


## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Linking with Tag [@inferid]()

The tag `@inferid` is a unique identifier for linking [**InferJS-Library**][inferjs-library] behind the scenes. It is required for each `method`, `property` or `field`, you would like to check. 

This special tag, allows code to still work, while **JavaScript** is `compressed/minified` or `obfuscated`. All **Infers** are stored in a precompiled **InferObject** file. This makes it easy to write in your static data types and not have to worry about type checking them during **JavaScript Runtime** execution. 

`@inferid` can be anything you want as a name, but must be **unique** per item you want to check.

Below is an example of `@inferid`:
#### Fomart for [@inferid](): 
- [@inferid]() _uniqueId_

```js
/**
 * @inferid foo
 */
```

## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Running InferJS Checks with Method [check()]()

To check all your types and expectations, you need to call the [**InferJS-Library**][inferjs-library] method `check()`. It needs to be added at the beginning of each method(s) starting closure or below each variable you would like to check.

Below is the overload signature for the method `check()`:
| Method Signature for [**InferJS-Library**][inferjs-library]: check() |
| :-- |
| **check** (&nbsp;inferId: [_@inferid_](),&nbsp;&nbsp;args: [_arguments_](),&nbsp;&nbsp;returnException: [_boolean =_]()`false`&nbsp;) |
| _Description_: Type checks all parameters in arguments list and either returns or throws exception.  |
| **check** (&nbsp;inferId: [_@inferid_](),&nbsp;&nbsp;arg: [_field_](),&nbsp;&nbsp;returnException: [_boolean =_]()`false`&nbsp;) |
| _Description_: Type checks single declared variables or fields. 

#### Example Check All Method Params:

```js
function foo(){
  inferjs.check('Your - @inferid', arguments);
}
```

#### Example Check Field or Variable:
```js
var a = 'foo';
inferjs.check('Your - @inferid', a);  
```

## ![Heading][arrow]&nbsp;&nbsp;InferJS Library: Type Checking Errors

In [**InferJS-Library**][inferjs-library] you have the option to throw or return `exception` from the `check()` method. Thrown errors come with tons of information for debugging your types and expectations. 

| Exception Types | Description |
| :-- | :-- |
| [InferUnhandledError][unhandled-error] | For all errors unhandled by the **InferJS** library. |
| [InferTypeError][type-error] | For all type errors created from the **JSDoc** tag `@param` `{type}` |
| [InferExpectError][expect-error] | For all errors related to the custom **JSDoc** tag `@infer` and custom expectation rules. |

Below are examples of exception type responses from [**InferJS-Library**][inferjs-library].  

#### > InferTypeError Example:
```console
InferTypeError: Incorrect third parameter type in:
@inferid: foo
@function: ( msg: <string>, id: <number>, objectTester: <object> )
@param: objectTester
Expected Type: object
Actual Type: null
```

#### > InferExpectError Example:
```console
InferExpectError: Incorrect first parameter, failed infer expectation type check in:
@inferid: foo
@function: foo( msg: <string|number|null>, id: <number|string>, send: <boolean> )
@param: msg
Expectation Type: STRING-NOT-EMPTY
Expectation Value: "1234"
Argument Value: ""
```



_For more examples, please refer to the [Documentation](https://inferjs.com)_





<!-- ROADMAP -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Roadmap
- [[ April 2023 ]()] - Create a plan for text localization with the **InferJS-Library** repo.
- [[ March 2023 ]()] - First Release Date - Possible 
- [[ Feb 2023 ]()] - Make Distributon Plan and Library Versioning for browser with Webpack and Terser for JS minification.
- [[ Jan 25, 2023 ]()] - Under Development and Testing


<!-- CONTRIBUTING -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag `enhancement`.
Don't forget to give the project a [⭐ star](), Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request





<!-- LICENSE -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: License

Distributed under the **MIT** License. See `LICENSE.txt` for more information.





<!-- CONTACT -->
## ![Heading][arrow]&nbsp;&nbsp;InferJS-Library: Support Related
 - [**InferJS-Library** Documentation][library-docs] - Information documentation for the **InferJS-Library**.
 - [**InferJS-Library** Issues][library-issues] - Direct all questions about the **InferJS-Library**



