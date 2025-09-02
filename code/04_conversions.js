/*
 Summary of Type Conversions in JavaScript:

 Two kinds:
 -> Explicit: you call Number(x), String(x), Boolean(x) (or use constructors).
 -> Implicit: conversions happen by operators/contexts (e.g. +, -, ==, template strings).

 ToNumber rules (common cases):
 -> ''       -> 0
 -> '123'    -> 123
 -> '12.3'   -> 12.3
 -> 'foo'    -> NaN
 -> '  7 '   -> 7   (whitespace trimmed)
 -> null     -> 0
 -> undefined-> NaN
 -> true     -> 1, false -> 0
 -> []       -> 0   (empty array -> '' -> 0), ['5'] -> 5
 -> {}       -> NaN (plain object tries valueOf/toString -> usually '[object Object NaN)
 -> Symbol   -> throws or cannot be meaningfully converted to number

 ToString rules:
 -> Numbers, booleans -> usual text form ('55', 'true', 'false')
 -> null -> 'null', undefined -> 'undefined'
 -> Arrays -> elements joined (e.g. [1] -> '1', [] -> '')
 -> Objects -> toString() (default '[object Object]') or implement custom toString()
 -> Use JSON.stringify(obj) for readable object JSON representation

 ToBoolean (truthiness):
 -> Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
 -> Everything else is truthy (including '0', 'false' (string), [], {} )

 Common pitfalls:
 -> typeof null === 'object'  (historical quirk)
 -> + with a string does concatenation: '5' + 1 === '51'
 -> Use unary + to force numeric conversion: +'42' === 42
 -> == does type-coercing comparison (can be surprising); prefer === for strict equality
 -> isNaN(x) coerces to number first; use Number.isNaN(x) to check NaN reliably

 Useful helpers:
 -> Number(x) / String(x) / Boolean(x) for explicit conversion
 -> Unary + (+'123') converts to number
 -> !!x converts value to boolean (double negation)
 -> Number.isNaN(value) instead of global isNaN

 Short commented examples (no runtime output here, examples for reference):
 +''           // -> 0         (unary + on empty string)
 +'  7 '       // -> 7         (whitespace trimmed)
 '5' + 1       // -> '51'      (string concatenation)
 '5' - 1       // -> 4         (numeric subtraction forces number conversion)
 !![]          // -> true      (array is truthy)
 Number('foo') // -> NaN
 String(null)  // -> 'null'
 Boolean('')   // -> false

 Tip:
 -> When mixing values, be deliberate: convert operands explicitly (Number/ String / Boolean) to avoid implicit coercion surprises.
*/
let sample1 = "100"; // string
console.log(typeof sample1); // string
console.log(sample1); // "100"

let valueInNumber = Number(sample1); // conversion from string to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 100
console.log();

let sample2 = "wii9290"; // string
console.log(typeof sample2); // string
console.log(sample2); // "wii9290"

let valueInNumber2 = Number(sample2); // conversion from string to number
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN (Not a Number)
console.log();

let sample3 = null; // null
console.log(typeof sample3); // object
console.log(sample3); // null

let valueInNumber3 = Number(sample3); // conversion from null to number
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0
console.log();

let sample4 = undefined; // undefined
console.log(typeof sample4); // undefined
console.log(sample4); // undefined

let valueInNumber4 = Number(sample4); // conversion from undefined to number
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // NaN (Not a Number)
console.log();

let sample5 = true; // boolean
console.log(typeof sample5); // boolean
console.log(sample5); // true

let valueInNumber5 = Number(sample5); // conversion from boolean to number
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 1
console.log();

let sample6 = "Abhi"; // string
console.log(typeof sample6); // string
console.log(sample6); // "Abhi"

let valueInNumber6 = Number(sample6); // conversion from string to number
console.log(typeof valueInNumber6); // number
console.log(valueInNumber6); // NaN (Not a Number)
console.log();

let sample7 = 1; // number
console.log(typeof sample7); // number
console.log(sample7); // 1

let valueInBoolean = Boolean(sample7); // conversion from number to boolean
console.log(typeof valueInBoolean); // boolean
console.log(valueInBoolean); // true
console.log();

let sample8 = ""; // string
console.log(typeof sample8); // string
console.log(sample8); // ""

let valueInBoolean2 = Boolean(sample8); // conversion from string to boolean
console.log(typeof valueInBoolean2); // boolean
console.log(valueInBoolean2); // false
console.log();

let sample9 = "Abhi"; // string
console.log(typeof sample9); // string
console.log(sample9); // "Abhi"

let valueInBoolean3 = Boolean(sample9); // conversion from string to boolean
console.log(typeof valueInBoolean3); // boolean
console.log(valueInBoolean3); // true
console.log();

let sample10 = null; // null
console.log(typeof sample10); // object
console.log(sample10); // null

let valueInBoolean4 = Boolean(sample10); // conversion from null to boolean
console.log(typeof valueInBoolean4); // boolean
console.log(valueInBoolean4); // false
console.log();

let sample11 = undefined; // undefined
console.log(typeof sample11); // undefined
console.log(sample11); // undefined

let valueInBoolean5 = Boolean(sample11); // conversion from undefined to boolean
console.log(typeof valueInBoolean5); // boolean
console.log(valueInBoolean5); // false
console.log();

let sample12 = 55; // number
console.log(typeof sample12); // number
console.log(sample12); // 55

let valueInString = String(sample12); // conversion from number to string
console.log(typeof valueInString); // string
console.log(valueInString); // "55"
console.log();

let sample13 = true; // boolean
console.log(typeof sample13); // boolean
console.log(sample13); // true

let valueInString2 = String(sample13); // conversion from boolean to string
console.log(typeof valueInString2); // string
console.log(valueInString2); // "true"
console.log();

let sample14 = null; // null
console.log(typeof sample14); // object
console.log(sample14); // null

let valueInString3 = String(sample14); // conversion from null to string
console.log(typeof valueInString3); // string
console.log(valueInString3); // "null"
console.log();

let sample15 = undefined; // undefined
console.log(typeof sample15); // undefined
console.log(sample15); // undefined

let valueInString4 = String(sample15); // conversion from undefined to string
console.log(typeof valueInString4); // string
console.log(valueInString4); // "undefined"
console.log();
