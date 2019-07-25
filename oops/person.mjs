export class Person {

    constructor(firstName, lastName, age, gender) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }

    get lastName() { return this._lastName; }
    set lastName(lastName) { this._lastName = lastName; }

    get age() { return this._age; }
    set age(age) { this._age = age; }

    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

}