'use strict';

function spread(...args) {
  console.log(args);
  console.log(args.join(', '));
  console.log(typeof args.join(', '));
  console.log(...args);
}

// spread('Marcos', 'Frony', 'mfrony@yahoo.com', 'foo');

function spreadObject(args) {
  console.log(args);
  const columnNames = [];
  const columnValues = [];
  for (let entry of Object.entries(args)) {
    columnNames.push(entry[0]);
    columnValues.push(entry[1]);
  }
  // const {spreaded} = args;
  console.log(columnNames);
  console.log(columnValues);
  // console.log(args.join(', '));
  console.log(columnNames.join(', '));
  console.log(columnValues.join(', '));
};
const obj = {
  firstName: 'Marcos',
  lastName: 'Frony',
  email: 'mfrony@yahoo.com',
  password: 'foo',
};
// spread(spreadObject);
spreadObject(obj);