import { InferObject } from "./inferobjects/test1.io.js";
import { InferJS } from "../dist/latest/ver-0-0-4/esmodule/inferjs-0.0.4.min.js";
const inferjs = new InferJS(InferObject);

/**
 * Test 1 case scenario for JavaScript inferjs function.
 * @category tests
 * @function foo
 * @param {string} msg - The message to send through console.log().
 * @param {(number|string)} id - The id of the message.
 * @param {boolean} send - Whether to send your message.
 * @infer {string} msg {STRING-NOT-EMPTY} - Checks if string is not empty.
 * @infer {(number|string)} id {INT8} - Check if number.
 * @inferid foo
 * @return {(InferTypeError|InferExpectError|string)} - Returns an error or the msg.
 */
function foo(msg, id, send) {

    // InferJS type check.
    const e = inferjs.check('foo', arguments, true);

    // Return error or message.
    if (e) {
        return e.message;
    } else {
        return msg;
    }
}

// Example Normal Call
console.log(foo('test', '-1234', true));