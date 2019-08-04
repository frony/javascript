'use strict';

const pubsub = require('./pubsub');
let subscription;

subscription = pubsub.subscribe('anEvent', data => {
  console.log(`an event called 'anEvent' was published with data ${data.msg}`);
  subscription.unsubscribe();
});