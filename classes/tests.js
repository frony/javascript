/*
class MyClass {
  constructor() {
    this.name = 'Marcos';
  }

  sayHi() {
    console.log(MyClass); // MyClass is visible only inside the class
    console.log(this.name);
  }
}

let test = new MyClass();

test.sayHi();
*/

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
/*let User = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass is visible only inside the class
  }
};

new User().sayHi();*/ // works, shows MyClass definition

// console.log(MyClass);

class User {
  name = "Anonymous";

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHi();