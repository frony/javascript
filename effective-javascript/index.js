"use strict";

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function identityf(id) {
    return function () {
      return id;
    };
}


/*function addf(a, b) {
  let temp = a;
  return function (b) {
    return temp + b;
  };
}*/

function addf(a) {
  return function (b) {
    return a + b;
  };
}


function curry(fn, first) {
    return function (second) {
      return fn(first,  second);
    };
}

/*function curry2(func, .mul.apply.first) {
    return fucntion(...second) {
    return function (...first, ...second) {

    }
  }
}*/


function curryr(fn, fixedNum) {
    return function (second) {
      return fn(second, fixedNum);
    };
}

console.log('===== liftf =====');
function liftf(fn) {
  return function (first) {
    return function (second) {
        return fn(first,  second);
    };
  };
}

let addf2 = liftf(add);
console.log(addf2(3)(4)); // 7
let mulf = liftf(mul);
console.log(mulf(5)(6)); // 30
// console.log(liftf(mulf)(5)(6));

let incAddF = liftf(add)(1);
console.log(incAddF(1)); // 2



function twice(fn) {
  return function (num) {
    return fn(num, num);
  };
}

function reverse(fn) {
  return function(a, b) {
    return fn(b,  a);
  };
}

/*function reverse2(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}*/

function composeu(fn1, fn2) {
  return function (num) {
    return fn2(fn1(num));
  };
}

function composeb(fn1, fn2) {
  return function(a, b, c) {
    return fn2(fn1(a, b),  c);
  };
}

function limit(fn, max) {
  let counter = 0;
  return function (a, b) {
    if (counter < max) {
      counter = counter + 1;
      return fn(a, b);
    }
    // return undefined;
  };
}

function from(num) {
  return function () {
    let next = num;
    num += 1;
    return next;
  };
}

function to(fn, max) {
  return function () {
    let returnVal = fn();
    if (returnVal < max) {
      return returnVal;
    }
  };
}

/*function to(gen, end) {
  return function () {
    let value = gen();
    if (value < end) {
      return value;
    }
  };
}*/


/*function fromTo(start, max) {
  let counter = start;
  let returnVal = start;
  return function () {
    if (counter < max) {
      counter += 1;
      returnVal = counter -1;
      return returnVal;
    }
  };
}*/

function fromTo(start, end) {
  return to(from(start), end);
}


console.log('===== element =====');
function element(arr, fn) {
  return function () {
    let index = fn();
    if (index !== undefined) {
      return arr[index];
    }
    return undefined;
  };
}

let myArr = ["a", "b", "c", "d"];
let gen4 = element(myArr, fromTo(1, 3));
console.log(gen4()); // b
console.log(gen4()); // c
console.log(gen4()); // undefined

/*function element2(arr, fn) {
  let counter = 0;
  return function () {
    if (fn) {
      let index = fn();
      if (index !== undefined) {
        return arr[index];
      }
    } else {
      counter += 1;
      return arr[counter - 1];
    }

    return undefined;
  };
}*/

console.log('===== element2 =====');
function element2(arr, fn) {
  if (fn === undefined) {
    fn = fromTo(0, arr.length);
  }
  return function () {
    let index = fn();
    if (index !== undefined) {
      return arr[index];
    }
    return undefined;
  };
}

let myArr2 = ["a", "b", "c", "d"];
let gen5 = element2(myArr2);
console.log(gen5()); // a
console.log(gen5()); // b
console.log(gen5()); // c
console.log(gen5()); // d
console.log(gen5()); // undefined

let gen6 = element2(myArr2, fromTo(1, 3));
console.log(gen6()); // b
console.log(gen6()); // c
console.log(gen6()); // undefined


console.log('===== collect =====');
function collect(fn, arr) {
  return function () {
    let val = fn();
    if (val !== undefined) {
      arr.push(val);
      return val;
    }
    return undefined;
  };
}

let myArr3 = [];
let gen7 = collect(fromTo(0, 2), myArr3);
console.log(gen7()); // 0
console.log(gen7()); // 1
console.log(gen7()); // undefined
console.log(myArr3); // [0, 1]



console.log('===== filter =====');
function filter(gen, predicate) {
  return function () {
    let value;
    do {
      value = gen();
    } while (
    value !== undefined && !predicate(value));
    return value;
  };
}

let gen8 = filter(fromTo(0, 5), function third(value) {
  return (value % 3) === 0;
});
console.log(gen8()); // 0
console.log(gen8()); // 3
console.log(gen8()); // undefined

function filterRecursion(gen, predicate) {
  return function recur() {
    let value = gen();
    if (
            value === undefined ||
            predicate(value)
    ) {
      return value;
    }
    return recur();
  };
}

function addg(first) {
  if (first !== undefined) {
    return function more(next) {
      if (next === undefined) {
        return first;
      }
      first += next;
      return more;
    };
  }
}
console.log('===== addg =====');
addg(); // undefined
addg(2)(); // 2
addg(2)(7)(); // 9
addg(3)(0)(4)(); // 7
addg(1)(2)(4)(8)(); // 15



function liftg(binary) {
  return function (first) {
    if (first !== undefined) {
      return function more(next) {
        if (next === undefined) {
          return first;
        }
        first = binary(first,  next);
        return more;
      };
    }
  };
}
console.log('===== liftg =====');
// console.log(liftg(mul)()); // undefined
console.log(liftg(mul)(3)()); // 3
console.log(liftg(mul)(3)(0)(4)()); // 0
console.log(liftg(mul)(1)(2)(4)(8)); // 64


/*function arrayg(first) {
  let localArr;
  return function () {
    if (first !== undefined) {
      return function more(next) {
        if (next === undefined) {
          localArr.push(next);
          return localArr;
        }
      }
    }
    return localArr;
  }
}*/
function arrayg(first) {
  let localArr = [];
  function more(next) {
    if (next === undefined) {
      return localArr;
    }
    localArr.push(next);
    return more;
  }
  return more(first);
}

console.log('===== arrayg =====');
console.log(arrayg()); // []
console.log(arrayg(3)()); // [3]
console.log(arrayg(3)(4)(5)()); // [3, 4, 5]
console.log('===== END arrayg =====');

console.log('===== continuize =====');
function continuize(fn) {
  return function (cb, num) {
    return cb(fn(num));
  };
}

/*function continuize2(fn) {
  return function (cb, num) {
    return cb(fn(num));
  }
}*/

let sqrtc = continuize(Math.sqrt);
sqrtc(console.log,  81);
console.log('===== END continuize =====');


// ============================
// ========== tests ===========
// ============================

console.log(add(3, 2)); // 5
console.log(sub(3, 2)); // 1
console.log(mul(3, 2)); // 6

console.log('===== identityf =====');
let three = identityf(3);
console.log(three()); // 3

console.log('===== addf =====');
let inc = addf(1);
console.log(inc(5)); // 6
console.log(inc(inc(10))); // 12
console.log(addf(3)(4)); // 7

console.log('===== curry =====');
let add3 = curry(add, 3);
console.log(add3(4)); // 7
console.log(curry(mul,  5)(6)); // 30

inc = curry(add, 1);
console.log(inc(1)); // 2
console.log(inc(inc(1))); // 3


console.log('===== curryr =====');
let sub3 = curryr(sub,  3);
console.log(sub3(11)); // 8
console.log(sub3(8)); // 5
console.log(sub3(3)); // 0

inc = curryr(add, 1);
console.log(inc(7)); // 8
console.log(inc(inc(9))); // 11






console.log('===== twice =====');
let doubl = twice(add);
console.log(doubl(11)); //22

let square = twice(mul);
console.log(square(11)); // 121



console.log('===== reverse =====');
let bus = reverse(sub);
console.log(bus(3, 2)); // -1



console.log('===== composeu =====');
console.log(composeu(doubl, square)(5)); // 100
console.log(composeu(square, doubl)(5)); // 50


console.log('===== composeb =====');
console.log(composeb(add,  mul)(2, 3, 7)); // 35


console.log('===== limit =====');
let add_lmtd = limit(add,  1);
console.log(add_lmtd(3, 4)); // 7
console.log(add_lmtd(3, 5)); // undefined


console.log('===== from =====');
let gen = from(0);
console.log(gen()); // 0
console.log(gen()); // 1
console.log(gen()); // 2

console.log('===== to =====');
let gen2 = to(from(3), 5);
console.log(gen2()); // 3
console.log(gen2()); // 4
console.log(gen2()); // undefined
console.log(gen2()); // undefined

console.log('===== fromTo =====');
let gen3 = fromTo(0, 3);
console.log(gen3()); // 0
console.log(gen3()); // 1
console.log(gen3()); // 2
console.log(gen3()); // undefined






console.log('===== filterRecursion =====');
let gen9 = filterRecursion(fromTo(0, 5), function third(value) {
  return (value % 3) === 0;
});
console.log(gen9()); // 0
console.log(gen9()); // 3
console.log(gen9()); // undefined

console.log('===== concat =====');
function concat(gen1, gen2) {
  return function () {
    let val = gen1();
    if (val !== undefined) {
      return val;
    }
    return gen2();
  };
}

let gen10 = concat(from(0, 3), from(0, 2));
console.log(gen10()); // 0
console.log(gen10()); // 0
console.log(gen10()); // 0
console.log(gen10()); // 0



console.log('===== gensymf =====');
function gensymf(char) {
  let arrCounter = [];
  return function () {
    let counter = arrCounter[char];
    if (counter === undefined) {
      counter = 0;
    }
    arrCounter[char] = counter + 1;
    let val = char + arrCounter[char];
    return val;
  };
}

let genG = gensymf("G");
let genH = gensymf("H");
console.log(genG()); // G1
console.log(genH()); // H1
console.log(genG()); // G2
console.log(genH()); // H2

console.log('===== gensymf2 =====');
function gensymf2(prefix) {
  let genX = from(1);
  return function () {
    return prefix + genX();
  };
}
let genG2 = gensymf2("G");
let genH2 = gensymf2("H");
console.log(genG2()); // G1
console.log(genH2()); // H1
console.log(genG2()); // G2
console.log(genH2()); // H2


console.log('===== fibonaccif =====');
function fibonaccif(first, second) {
  return function () {
    let next = first;
    first = second;
    second += next;
    return next;
  };
}

let fib = fibonaccif(0, 1);
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


console.log('===== counter =====');
function counter() {
  let countX = 0;

  function up() {
    countX += 1;
    return countX;
  }

  function down() {
    countX -= 1;
    return countX;
  }

  return {
    up,
    down
  };
}

let object = counter();
let up = object.up;
let down = object.down;
console.log(up()); // 1
console.log(down()); // 0
console.log(down()); // -1
console.log(up()); // 0


console.log('===== revocable =====');

function revocable(gen) {
  // let isInvokable = true;

  /*function revoke() {
    isInvokable = false;
  }*/

  function revoke() {
    gen = undefined;
  }

  function invoke(first, second) {
    if (gen !== undefined) {
      return gen(first, second);
    }
  }

  /*function invoke(first, second) {
    if (isInvokable) {
      return gen(first, second);
    }
  }*/

  /*function invoke() {
   if (isInvokable) {
   return function () {
   return gen();
   }

   }
   }*/

  return {
    revoke,
    invoke
  };
}

let rev = revocable(add);
let add_rev = rev.invoke;
console.log(add_rev(3, 4)); // 7
rev.revoke();
console.log(add_rev(5, 7)); // undefined



function m(value,  source) {
  return {
    value: value,
    source: (typeof source === "string")
            ? source
            : String(value)
  };
}

console.log('===== addm =====');
/*function addm(obj1, obj2) {
  let val1 = obj1.value;
  let val2 = obj2.value;
  return {
    value: val1 + val2,
    source: `(${val1} + ${val2})`
  };
}*/

function addm(a, b) {
  return m(
          a.value + b.value,
          "(" + a.source + "+" + b.source + ")"
  );
}

console.log(JSON.stringify(addm(m(3), m(4))));
console.log(JSON.stringify(addm(m(1), m(Math.PI))));


console.log('===== liftm =====');
function liftm(fn, operatorSymbol) {
  return function (a, b) {
    // let val = fn(a, b);
    return m(
            fn(a.value, b.value),
            "(" + a.source + operatorSymbol + b.source + ")"
    );
  };
}

let addmVar = liftm(add,  "+");
console.log(JSON.stringify(addmVar(m(3), m(4))));
console.log(JSON.stringify(addmVar(m(1), m(Math.PI))));



console.log('===== liftm2 =====');
function liftm2(fn, operatorSymbol) {
  return function (a, b) {
    let first = (typeof a === "number" ? a : a.value);
    let second = (typeof b === "number" ? b : b.value);
    return m(
            fn(first, second),
            "(" + first + operatorSymbol + second + ")"
    );
  };
}

let addmVar2 = liftm2(add, "+");
console.log(JSON.stringify(addmVar2(3, 4)));



// homework a function that returns itself.
// Write a function addg that adds from amny invocations until
// it sees an empty invocation.
/*function addg() {

}
 */

