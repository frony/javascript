'use strict';

/*
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of 2 to 5, print Not Weird
If  is even and in the inclusive range of 6 to 20, print Weird
If  is even and greater than , print Not Weird*/

function printWeird(N) {
  if (N % 2 !== 0) {
    console.log('Weird');
  } else {
    if (N >= 2 && N <= 5) {
      console.log('Not Weird');
    } else if (N >= 6 && N <= 20) {
      console.log('Weird');
    } else if (N > 20) {
      console.log('Not Weird');
    }
  }
}
