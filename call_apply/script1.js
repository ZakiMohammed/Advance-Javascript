let person = {
    firstName: 'Adam',
    lastName: 'Walker',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

let person1 = {
    firstName: 'John',
    lastName: 'Marshal'
};
let person2 = {
    firstName: 'Allen',
    lastName: 'Green'
};

let fullName1 = person.fullName.call(person1);
let fullName2 = person.fullName.apply(person2);

console.log(fullName1);
console.log(fullName2);

/**
 * Call and Apply
 * - You can write a method that can be used on different objects
 * - Difference:
 *  - The call() method takes arguments separately
 *  - The apply() method takes arguments as an array
 */