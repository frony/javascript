'use strict';
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function traverse(list) {
  while(list) {
    console.log(list.value);
    list = list.next;
  }
}

traverse(list);