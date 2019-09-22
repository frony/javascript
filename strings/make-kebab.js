'use strict';

function kebabCase(str) {
  console.log(str.replace(/[\s]/g, '-').replace(/[:;@#]/g, ''));
}

const test = 'Crocs: Make Lightning McQueen Heely Crocs in adult sizes';

kebabCase(test);