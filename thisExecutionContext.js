// JavaScript Excution context

// Method 1
function foo() {
  console.log("Hello foo");
  console.log(this);  
}

foo(); // this will print window global object

// Method 2
// Here this refers to obj context
var obj = {"fname":"aslam"};
obj.foo = function () {
  console.log("Hello obj");
  console.log(this);
}

obj.foo();


// Method 3

new foo(); // this will print blank object of foo
