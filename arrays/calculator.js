'use strict';

function Calculator() {
  let methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {
    const arr = str.split(' ');
    // console.log(arr);
    const a = +arr[0];
    const operator = arr[1];
    const b = +arr[2];

    return methods[operator](a, b);
  };

  this.addMethod = function(name, func) {
    methods[name] = func;
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") ); // -4


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8