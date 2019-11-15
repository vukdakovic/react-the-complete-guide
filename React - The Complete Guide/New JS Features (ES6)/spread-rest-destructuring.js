// Spread

// const newArray = [...oldArray, 3, 4]
// const newObject = {...oldObject, newProp: 5}

// Rest

// function sortArgs(...args) {
//    return args.sort()
// }


//Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const person = {
  name: "Vuk"
}

const newPerson = {
  ...person,
  age: 27
}

console.log(newPerson.name);
console.log(newPerson.age);


// Rest
const filter = (...args) => {
  return args.filter(el => el === 3);
}

console.log(filter(1, 2, 3));

// Destructuring
const numbers1 = [1, 2, 3, 4];
[num1, ,num2] = numbers1;

console.log(num2);
