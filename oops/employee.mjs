import { Person } from "./person.mjs";

export class Employee extends Person {

    constructor(firstName, lastName, age, gender, id, job, salary) {
        super(firstName, lastName, age, gender);
        this._id = id;
        this._job = job;
        this._salary = salary;
    }

    get id() { return this._id; }
    set id(id) { this._id = id; }

    get job() { return this._job; }
    set job(id) { this._job = job; }

    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

}