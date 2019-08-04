'use strict';

function overlappingArea(R1B, R1T, R2B, R2T) {
  function max(a, b) {
    return a > b ? a : b;
  }

  function min(a, b) {
    return a < b ? a : b;
  }

  const left = max(R1B.x, R2B.x);
  const right = min(R1T.x, R2T.x);
  const bottom = max(R1B.y, R2B.y);
  const top = min(R1T.y, R2T.y);

  const width = right - left;
  const length = top - bottom;

  if (width < 1 || length < 1) {
    return false;
  }

  return width * length;

}


const R1B = {
  x: 2,
  y: 1,
};

const R1T = {
  x: 5,
  y: 5,
};

const R2B = {
  x: 3,
  y: 2 ,
};

const R2T = {
  x: 5,
  y: 7,
};

console.log(overlappingArea(R1B, R1T, R2B, R2T));