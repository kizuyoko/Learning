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

type Person = {
  name: string;
  age: number;
};

let person: Person;

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

// oneName should be only a string OR an array of string. It calls union type.
let oneName: string | string[];

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

// This won't return anything, because there is no statement.
function print(value: any) {
  console.log(value);
}

