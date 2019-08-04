'use strict';

const {firstName, lastName, ...remaining} = {
  firstName: 'Marcos',
  lastName: 'Frony',
  age: 54,
  height: '6.4'
};

console.log(`name: ${firstName} ${lastName}`);
console.log(remaining);

const person = {firstName: 'Marcos', lastName: 'Frony'};
const account = {name: 'WF', amount: '$10000'};
const personAndAccount = { ...person, ...account };
console.log(personAndAccount);