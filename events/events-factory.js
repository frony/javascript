'use script';

const util = require('util');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

console.log(myEmitter instanceof EventEmitter);

/*myEmitter.once('newListener', (event, listener) => {
  myEmitter.on(event, () => {
    console.log(event);
    console.log(util.inspect(listener, { depth: 'none' }));
  });
});*/

function myEventEmitters(eventName, listener) {
  myEmitter.on(eventName, listener);
}

// myEmitter.on('event', () => console.log('A'));
// myEmitter.on('event', () => console.log('B'));
// myEmitter.on('newEvent', () => console.log('C'));

myEventEmitters('event', () => console.log('A'));
myEventEmitters('event', () => console.log('B'));
myEventEmitters('newEvent', () => console.log('C'));

myEmitter.emit('event');
myEmitter.emit('newEvent');

const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
// ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
ee.emit('ping');