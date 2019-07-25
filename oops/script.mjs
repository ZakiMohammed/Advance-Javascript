import { Employee } from "./employee.mjs";
import { Student } from "./student.mjs";

let employee = new Employee('John', 'Marshal', 12, 'M', 1001, 'Clerk', 12000);
let student = new Student('Allen', 'Walker', 12, 'M', 54, 'Computer');

console.log(employee.fullName());
console.log(student.fullName());

/**
 * Class
 * - class keyword is use to create class
 * - get set keyword is use to create getter and setter
 * - constructor keyword is use to create constructor
 * - extends keyword is use to inherit another class
 * 
 * Node JS
 * - Create module with .mjs extension and also the main script file with .mjs
 * - Run this command: node --experimental-modules script.mjs
 */