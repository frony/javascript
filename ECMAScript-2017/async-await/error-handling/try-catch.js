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
  let doubleA;
  let doubleB;
  try {
    doubleA = await doubleAfterOneSec(a);
    doubleB = await doubleAfterOneSec(b);
  } catch (e) {
    return NaN;
  }
  return doubleA + doubleB;
}

doubleAndAdd('one', 2).then(console.log);
doubleAndAdd(3, 5).then(console.log);