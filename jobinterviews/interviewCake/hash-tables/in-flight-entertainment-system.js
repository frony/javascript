'use strict';

// https://www.interviewcake.com/question/javascript/inflight-entertainment?course=fc1&section=hashing-and-hash-tables

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  // loop through movieLengths
  for (let i = 0; i < movieLengths.length; i++) {
    // if flightLength - currentMovieLength === a movieLengths saved in movieLengthsSeen
    let currentMovieLength = movieLengths[i];
    let remainingTime = flightLength - currentMovieLength;
    if (movieLengthsSeen.has(remainingTime)) {
      return true;
    } else {
      movieLengthsSeen.add(currentMovieLength);
    }

  }

  return false;
}

let actual = canTwoMoviesFillFlight([2, 4], 6);
console.log(actual);

actual = canTwoMoviesFillFlight([3, 8, 3], 6);
console.log(actual);

actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
console.log(actual);

actual = canTwoMoviesFillFlight([4, 3, 2], 5);
console.log(actual);