'use strit';

function debounce(fn, ms) {
  let mustWait = false;
  return function() {
    if (mustWait) {
      return;
    }

    fn.apply(fn, arguments);
    mustWait = true;

    setTimeout(() => mustWait = false, ms);
  }
}

let f = debounce(console.log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)