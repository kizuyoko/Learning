// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Yoko';

let isInstructor: boolean;

isInstructor = false;


// More complex types

// Array of strings.
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Yoko',
  age: 50
}

// Not storable!!
// person = {
//   isEmployee: false
// }

// Array of objects
let people: {
  name: string;
  age: number;
}[];


// Type Inference
// You can add :type like the commented code below, but not nessesary.
// let course: string = 'React - The Complete Guide';
let course: string | number = 'React - The Complete Guide';

// This does not work if you have already defineded course as only string.
course = 123456;

// oneName should be only a string OR an array of string.
let oneName: string | string[];

