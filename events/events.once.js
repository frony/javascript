'use strict';

const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  // await ee.on('myevent', () => console.log);

  // const [value1] = await (ee, 'myevent');
  // console.log(value1);

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    const second = await once(ee, 'myevent');
    console.log(second);
  } catch (err) {
    console.log('error happened', err);
  }
}

run();