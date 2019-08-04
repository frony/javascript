'use script';

function Test1() {
  // this.name = "John";
  // this.isAdmin = false;
  let foo = 'bar';
}

/*const test1 = new Test1();
console.log(test1.name);
console.log(test1.isAdmin);
console.log(test1.foo);*/

// const test2 = Test1;
// console.log(test2().name);
// console.log(test2().isAdmin);
// console.log(test2.foo);


/*
let user = new function() {
  this.name = "John";
  this.isAdmin = false;
  let foo = 'bar';
};

console.log(user.name);
console.log(user.isAdmin);
console.log(user.foo);*/


/*function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Enter new value', 0);
  };
}*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}


let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values