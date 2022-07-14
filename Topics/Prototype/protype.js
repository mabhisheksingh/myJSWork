// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.4
//All JavaScript objects inherit properties and methods from a prototype.

//!Prototype Inheritance
//#All JavaScript objects inherit properties and methods from a prototype:

    // Date objects inherit from Date.prototype
    // Array objects inherit from Array.prototype
    // Person objects inherit from Person.prototype
// !The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myFather1 = new Person("John", "Doe", 50, "rede");
Person.prototype.test = "Abhihek";

///making person object have prototype test
console.log( " Prototype : "+ myFather.test);
console.log( " Prototype : "+ myFather1.test);
