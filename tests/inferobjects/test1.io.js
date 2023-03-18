export const InferObject = {"globals":{"compiler":{"name":"inferjs-compiler","version":"0.0.8"}},"methods":{"infers":{"foo":{"file":"test1.js","line":6,"line-inferid":14,"description":"Test 1 case scenario for JavaScript inferjs function.","name":"foo","@param":{"msg":{"description":"The message to send through console.log().","optional":false,"types":{"string":{"expects":{"STRING-NOT-EMPTY":{"description":"Checks if string is not empty."}}}}},"id":{"description":"The id of the message.","optional":false,"types":{"number":{"expects":{"INT8":{"description":"Check if number."}}},"string":{"expects":{"INT8":{"description":"Check if number."}}}}},"send":{"description":"Whether to send your message.","optional":false,"types":{"boolean":{"expects":{}}}}},"@returns":{"types":{"InferTypeError":{"description":"Returns an error or the msg."},"InferExpectError":{"description":"Returns an error or the msg."},"string":{"description":"Returns an error or the msg."}}}}}},"variables":{"infers":{}}};