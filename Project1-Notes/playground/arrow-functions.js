//Standard arrow function
var square = (x) => {
    var results = x * x;
    return results;
};

//Implicit arrow function, no {} body
//If only 1 argument it doesn't require ()
var easySquare = x => x * x; 

console.log(square(9));
console.log(easySquare(5));

//Arrow function does not have this. keyword
//sayHiAlt is an alternate ES6 way to write functions, used when this. is required
var user = {
    name: "Emmanuel",
    sayHi: () => {
        console.log(`Hi ${user.name}`);
    },
    sayHiAlt () {
        console.log(`Alt hi ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();