'use strict';

function doubleAfterOneSec(param) {
  return new Promise(resolve => {
    setTimeout(resolve(param * 2), 1000);
  });
}

async function doubleAndAdd(a, b) {
  const doubleA = await doubleAfterOneSec(a);
  const doubleB = await doubleAfterOneSec(b);
  return doubleA + doubleB;
}

doubleAndAdd(2, 4).then(console.log);