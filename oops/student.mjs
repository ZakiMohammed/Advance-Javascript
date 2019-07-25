import { Person } from "./person.mjs";

export class Student extends Person {

    constructor(firstName, lastName, age, gender, rollNo, className) {
        super(firstName, lastName, age, gender);
        this._rollNo = rollNo;
        this._className = className;
    }

    get rollNo() { return this._rollNo; }
    set rollNo(rollNo) { this._rollNo = rollNo; }

    get className() { return this._className; }
    set className(className) { this._className = className; }

}