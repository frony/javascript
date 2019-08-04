// 1. Basic bracket validation
//
// We want to write a function to validate bracket nesting.
//
// Let's say:
// '(', '{', '[' are called "openers."
// and
// ')', '}', ']' are called "closers."
//
// Write an efficient function that tells us whether or not an
// input string's openers and closers are properly nested.

const map = new Map();
// map.set('{', '}');
// map.set('(', ')');
// map.set('[', ']');

map.set('}', '{');
map.set(')', '(');
map.set(']', '[');

let set = new Set(['}', ']', ')']);



function bracketValidator(input) {
  const arr = input.split(' ');
  let arrStack = [];
  // console.log(arr);
  const maxLen = arr.length;
  for (let i = 0; i < maxLen; i++) {
    if (set.has(arr[i])) { // (np) Current character is a closer
      // (np) What do we want to do here?
      if (map.get(arr[i]) === arrStack[arrStack.length - 1]) {
        arrStack.pop();
      } else {
        return false;
      }
    } else { // (np) Current character is a opener
      arrStack.push(arr[i]);
    }

  }

  return arrStack.length > 0 ? false : true;

  // console.log(arrStack);
}

console.log(bracketValidator('{ [ ] ( ) }'))
// Expected output:
// true

console.log(bracketValidator('{ [ ( ] ) }'))
// Expected output:
// false

console.log(bracketValidator('{ [ ( { [ ( ) ] } ) ] }'))
// Expected output:
// true

console.log(bracketValidator('{ [ ( { [ ( ) } } ) ] }'))
// Expected output:
// false



console.log(bracketValidator('{ [ }'))
// Expected output:
// false

// console.log(bracketValidator('{ [ ] ( ) } {'))
// Expected output:
// false

// console.log(bracketValidator('] { [ ] ( ) }'))
// Expected output:
// false

// console.log(bracketValidator('{ { { { { } } ] } }'))
// Expected output:
// false








































// #####################################################
// 2. Modify the implementation of bracketValidator
// to receive a "bracket configuration object" to support
// an arbitrary set of brackets

// #####################################################
// 3. Modify bracketValidator to be aware of string
// literals, such that it exhibits the following behavior:

// console.log(bracketValidator('{ } " "'))
// Expected output:
// true
//
// console.log(bracketValidator('{ } " } { "'))
// Expected output:
// true

// console.log(bracketValidator('{ " ) ( " }'))
// Expected output:
// true

// console.log(bracketValidator('[ " ) { " ]'))
// Expected output:
// true

// console.log(bracketValidator('"'))
// Expected output:
// false

// console.log(bracketValidator('" " "'))
// Expected output:
// false

// console.log(bracketValidator('{ } "'))
// Expected output:
// false

// console.log(bracketValidator('" ( )'))
// Expected output:
// false

// #####################################################
// 4. Modify the bracketValidator API to be able to provide
// detailed info to the caller when a string fails
// to validate.
