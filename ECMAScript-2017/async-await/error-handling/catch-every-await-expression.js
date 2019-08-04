'use strict';

function doubleAfterOneSec(param) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const val = param * 2;
      isNaN(val) ? reject(NaN) : resolve(val);
    });
  });
}

async function doubleAndAdd(a, b) {
  const doubleA = await doubleAfterOneSec(a).catch(e => console.log('"a" is NaN'));
  const doubleB = await doubleAfterOneSec(b).catch(e => console.log('"b" is NaN'));
  if (!doubleA || !doubleB) {
    return NaN;
  }
  return doubleA + doubleB;
}

doubleAndAdd('foo', 'bar').then(console.log);
doubleAndAdd(3, 5).then(console.log);