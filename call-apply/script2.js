let person = {
    firstName: 'Adam',
    lastName: 'Walker',
    fullName: function (age, gender) {
        return this.firstName + ' ' + this.lastName + ' ' + age + ' ' + gender;
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

let fullName1 = person.fullName.call(person1, '12', 'M');
let fullName2 = person.fullName.apply(person2, ['13', 'M']);

console.log(fullName1);
console.log(fullName2);