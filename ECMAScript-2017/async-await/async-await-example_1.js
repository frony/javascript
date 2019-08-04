'use strict'

function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('John');
    }, 1000);
  });
}

function getBankBalance(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'John') {
        resolve('$1.00');
      }
      reject('Unknown user');
    }, 1000);
  });
}

async function getAmount(userId) {
  const user = await getUser(1);
  const amount = await getBankBalance(user);
  console.log(amount);
}

getAmount(1);