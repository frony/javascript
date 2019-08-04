'use strict';

function doubleAfterOneSec(param) {
  return new Promise(resolve => {
    setTimeout(resolve(param * 2), 1000);
  });
}

async function doubleAndAdd(a, b) {
  [a, b] = await Promise.all([doubleAfterOneSec(a), doubleAfterOneSec(b)]);
  return a + b;
}

doubleAndAdd(2, 4).then(console.log);