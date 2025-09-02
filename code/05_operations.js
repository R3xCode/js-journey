/*
 Overview of operators, precedence, associativity, and common pitfalls.

 Sections:
 1) Types & coercion
 2) Unary operators (negation, +)
 3) Binary arithmetic (+, -, *, /, %, **)
 4) Precedence & associativity
 5) Strings vs numeric addition (concatenation)
 6) Booleans, logical NOT, truthy/falsy
 7) Assignment chaining
 8) Increment / decrement behavior
 9) Console & debugging tips
 10) Practical tips and gotchas

 They are explained in detail below, with code examples:

 1) Types & coercion:
 JS is dynamically typed. Values carry types: Number, String, Boolean, Null, Undefined, Object, Symbol, BigInt.Many operators coerce operands implicitly; prefer explicit conversion when correctness/readability matters (Number(), String(), Boolean()).

 2) Unary operators:
 Unary negation: -value => numeric negation (coerces first).
 Examples:
   -(10)    => -10
   -("5")   => -5
   Unary plus: +value => numeric conversion.
   +true    => 1
   +""      => 0
   +"42"    => 42

 3) Binary arithmetic:
 - +  (add or concatenate), - (subtract), * (multiply), / (divide), % (remainder), ** (exponent). Division by zero yields Infinity/-Infinity; invalid numeric ops yield NaN.

 Examples (for quick copy/paste tests):
   5 + 3    // 8
   5 - 3    // 2
   5 * 3    // 15
   5 / 2    // 2.5
   5 % 3    // 2
   2 ** 3   // 8

 4) Precedence & associativity:
 Parentheses highest precedence. ** is right-associative: 2 ** 3 ** 2 === 2 ** (3 ** 2). *, /, % bind tighter than +, -. + can mean string concatenation when either operand is a string.
 Examples:
   (3 + 4) * 5 % 3  // -> 2  (7 * 5 = 35, 35 % 3 = 2)
   2 ** 3 ** 2     // -> 512 (2 ** (3 ** 2) = 2 ** 9 = 512)
   1 + 2 * 3       // -> 7  (1 + (2 * 3) = 1 + 6 = 7)

 * 5) Strings vs numeric addition (concatenation):
   If either operand to + is a String, + concatenates. Left-to-right evaluation matters:
   "1" + 2 + 2  // "122"   (("1" + 2) -> "12" + 2 -> "122")
   1 + 2 + "2"  // "32"    ((1 + 2) -> 3 + "2" -> "32")
 Prefer explicit conversions to avoid surprises.
 Examples:
   "1" + 2      // "12"
   1 + "2"      // "12"
   "1" + 2 + 2  // "122"
   1 + 2 + "2"  // "32"

 6) Booleans, logical NOT, truthy/falsy:
 Logical NOT (!) coerces to boolean then negates. !!value => boolean form of value. Falsy values: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy (including "0", [], {}).
 Examples:
   !true   // false
   !!"hi"  // true
   !!0     // false
   !!42    // true
   true + 1    // 2 (true coerces to 1)
   false + 1   // 1 (false coerces to 0)
   +true       // 1
   +false      // 0
   +null       // 0
   +""         // 0

 * 7) Assignment chaining:
 = is right-associative: a = b = c assigns c to b, then b to a. Chaining is concise but can reduce clarity in complex code.
 Example:
   let x, y;
   x = y = 5; // y = 5; x = y;

 * 8) Increment / decrement:
 Prefix ++x: increment then yield new value. Postfix x++: yield old value then increment. Use prefix when you need the incremented value inline; avoid mixing in complex expressions for readability.
 Examples:
   let n = 1;
   let a = ++n; // n===2, a===2
   n = 1;
   let b = n++; // n===2, b===1

 * 9) Console & debugging:
 console.log(...) for quick prints; console.table(...) for tabular data. Remove or gate verbose logs in production code.
 Examples:
   console.log("Value:", value);
   console.table({ add: 5+3, sub: 5-3, mul: 5*3 });

 * 10) Practical tips and gotchas:
 Avoid implicit coercion in critical logic; use Number(), String(), Boolean(). Use strict equality (===) to avoid surprising coercion. Check Number.isNaN / Number.isFinite for numeric validations. Remember modulo sign rules: remainder has same sign as dividend.

 Small reusable test value for the surrounding file examples below:
*/
let value = 10; // starting numeric value for demonstrations
let negValue = -value; // -10
console.log(negValue); // -10
console.log();

let a = 5; // 5
let b = 3; // 3
console.log(a, "and", b); // 5 and 3
let add = (a + b); // 8
let sub = (a - b); // 2
let multi = (a * b); // 15
let div = (a / b); // 1.6666666let
let mod = (a % b); // 2
let power = (a ** b); // 125
console.table( { add, sub, multi, div, mod, power } );
console.log();

let st1 = "Hi" // Hi
let st2 = " there!" //  there!
let st3 = st1 + st2 // Hi there!
console.log(st3); // Hi there!
console.log();

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"
console.log( (3 + 4) * 5 % 3); // 2
console .log();

console.log(true); // true
console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(); 
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+""); // 0
console.log();

let num1, num2, num3
num1 = num2 = num3 = 50 // Not a good practice
console.log(num1, num2, num3); // 50 50 50
console.log();

let gameScore = 10
gameScore = gameScore + 10
console.log(gameScore); // 20

let gameCounter = 20
++gameCounter; // 21
gameCounter++; // 22
console.log(gameCounter); // 22
