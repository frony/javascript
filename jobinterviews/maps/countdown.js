'use strict';

let _counter = new WeakMap();
let _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }

  dec() {
    let counter = _counter.get(this);
    if (counter < 1) {
      return;
    }
    // console.log(`counter: ${counter}`);
    counter--;
    _counter.set(this, counter);

    // console.log(`counter: ${counter}`);
    if (counter === 0) {
      _action.get(this)();
    }
  }

  get() {
    console.log(_counter.get(this));
  }
}

let c = new Countdown(2, () => console.log('DONE'));

c.get();
c.dec();
c.get();
c.dec();
c.get();