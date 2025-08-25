"use strict";
/*
It enforce strict mode for better error checking and cleaner code which is used in modern JavaScript and syntax that includes ES6+ features like let, const and arrow functions.It helps to avoid common pitfalls and makes debugging easier.Also, it is not mandatory but recommended to use in modern JavaScript development.
*/

/*
-> alert() we are not using alert in modern JavaScript development.

-> confirm() we are not using confirm in modern JavaScript development.

-> prompt() we are not using prompt in modern JavaScript development.

These functions are part of the browser's window object and are used for user interaction in web applications. However, they are not commonly used in modern JavaScript development due to their blocking nature and poor user experience. In node.js, we don't use these functions as they are part of the browser's window object. Instead, we use console.log() for output and other methods for input handling, such as using HTML forms or libraries like readline in Node.js.
*/

let firstName = "Naba"; // string
let age = 18; // number
let isadult = true; // boolean
let hobbies = ["reading", "coding", "gaming"]; // array (which is of type object)
let address = {
  city: "Guwahati",
  state: "Assam",
  country: "India",
}; // object

/*
1) Primitive Data Types:

Primitive data types are immutable and represent single values. They include number, bigint, string, boolean, null, undefined, and symbol.

(i) number => Represents both integer and floating-point numbers. Maximum safe integer: 2^53 - 1 (9007199254740991).
e.g.
let num = 42;

(ii) bigint => For integers larger than 2^53 - 1. Maximum value: limited by available memory.
e.g.
let bigIntNum = 9007199254740991n;

(iii) string => Sequence of characters, defined with "" or '' or ``. Maximum length: 2^53 - 1 elements (practically limited by memory).
e.g.
let str = "Hello, world!";

(iv) boolean => true or false values.
e.g.
let isAvailable = false;

(v) null => Represents an explicitly assigned "no value".
e.g.
let emptyValue = null;

(vi) undefined => Variable declared but not assigned a value.
e.g.
let notAssigned;

(vii) symbol => Unique and immutable primitive value, often used as object property keys. No practical limit on number of symbols.
e.g.
let uniqueId = Symbol('id');

2) Non-Primitive (Reference) Data Types:

Non-primitive data types are mutable and can hold collections of values or more complex entities. They include object, array, function, date, regexp, map, set, weakmap, and weakset.

(i) object => Collection of key-value pairs. Maximum properties: limited by memory.
e.g.
let person = { name: "Alice", age: 25 };

(ii) array => Ordered list of values (arrays are a type of object). Maximum length: 2^32 - 1 (4294967295) elements.
e.g.
let numbers = [1, 2, 3, 4];

(iii) function => Functions are first-class objects in JavaScript.
e.g.
function greet() {
   return "Hello!";
}

(iv) date => Instance of Date object for handling dates and times.
e.g.
let now = new Date();

(v) regexp => Regular expression object for pattern matching.
e.g.
let regex = /abc/;

(vi) map => Collection of keyed data items, like an object but keys can be any type.
e.g.
let map = new Map();

(vii) set => Collection of unique values.
e.g.
let set = new Set();

(vii) weakmap => Like Map but keys must be objects and are weakly referenced.
e.g.
let weakMap = new WeakMap();

(ix) weakset => Like Set but values must be objects and are weakly referenced.
e.g.
let weakSet = new WeakSet();
*/

// helper logger (multiple args supported)
function log(...args) {
  console.log(...args);
  console.log(); // empty line
}

log("Data Types in JavaScript:"); // Data Types in JavaScript:
log(typeof firstName); // string
log(typeof age); // number
log(typeof isadult); // boolean
log(typeof hobbies); // object (array is of type object)
log(typeof address); // object

log(typeof undefined); // undefined
log(typeof null); // object

let bigIntNum = 9007199254740991n;
log(typeof bigIntNum); // bigint

let uniqueId = Symbol("id");
log(typeof uniqueId); // symbol

function greet() {
  return "Hello!";
}
log(typeof greet); // function

let now = new Date();
log(typeof now); // object

let regex = /abc/;
log(typeof regex); // object

let map = new Map();
log(typeof map); // object

let set = new Set();
log(typeof set); // object

let weakMap = new WeakMap();
log(typeof weakMap); // object

let weakSet = new WeakSet();
log(typeof weakSet); // object
