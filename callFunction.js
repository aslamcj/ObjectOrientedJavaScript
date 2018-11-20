//Example 1

function add (a, b) {
    return a + b;
}

// Outputs: 3
console.log(add.call(this, 1, 2));

// Outputs: 3
console.log(add.apply(this, [1, 2]));


//Example 2

var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}

person.fullName.call(person1, "Oslo", "Norway"); 


//Example 3
var original = "There is 1 number.";

var updated = Array.prototype.filter.call(original, function(val) {
    return val.match(/1/);
});

// Outputs: ["1"]
console.log(updated);

// Outputs: "1"
console.log(updated.join(''));
