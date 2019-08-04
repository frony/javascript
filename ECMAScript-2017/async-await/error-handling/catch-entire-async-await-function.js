'use strict';

function doubleAfterOneSec(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const val = param * 2;
      isNaN(val) ? reject(NaN) : resolve(val);
    }, 1000);
  });
}

async function doubleAndAdd(a, b) {
  const doubleA = await doubleAfterOneSec(a);
  const doubleB = await doubleAfterOneSec(b);
  return doubleA + doubleB;
}

doubleAndAdd('foo', 'bar')
.then(console.log)
.catch(console.log);


doubleAndAdd(5, 10)
.then(console.log)
.catch(console.log);