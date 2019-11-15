const person = {
  name: "Vuk"
}

const secondPerson = person;
const thirdPerson = {...person}

person.name = "Vuki";
secondPerson.name = "Vukoslav"

console.log(secondPerson.name);
console.log(thirdPerson.name);


const numbers = [1, 2, 3];

const newNumbers = numbers.map((num) => {return num * 2})

console.log(numbers);
console.log(newNumbers);
