// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {
    function magic() {};
    magic.__proto__=magic.prototype;
    return magic;
};
let result = 0;
const incrementor = () => {
    result++;
    function f() {
        result++;
        f.toString = function() {
            return result;
        };
        return f;
    }
    
    return f;
};

let asyncResult = 1;
const asyncIncrementor = () => {
    return new Promise(resolve => {
         resolve(asyncResult++); 
    });
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {resolve(param)}, 1200);
    });
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null;};
const toBuffer = () => {};
const sortByProto = (array) => {return array.sort();};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;