function TestObj(fname, age) {
  this.firstName = fname;
  this.age = age;  
}

TestObj.prototype.displayNameAndAge = function() {
  this.age = this.age*10;
   console.log("User Name: "+this.firstName+" User Age: "+this.age);
}

var obj1 = new TestObj("aslam", 30);
var obj2 = new TestObj("zahid", 4);

obj1.age  // returns 30
obj2.age  // returns 4

obj1.displayNameAndAge(); // 
obj2.displayNameAndAge(); //


obj1.age  // returns 300
obj2.age  // returns 12

obj2.__proto__.constructor    // Displays the current function constructor object which it declared
                              // returns TestObj()
                              
obj2.__proto__.constructor === TestObj.prototype.constructor  // compares and display wether both are same
                                                              // returns true


