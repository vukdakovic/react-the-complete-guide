function printMyNameFunc(name) {
  console.log(name);
}
printMyNameFunc("Vuk1");


// Ovo je nova funkcija
const printMyNameArrow = (name) => {
  console.log(name);
}
printMyNameArrow("Vuk2");


// Ako imamo samo jedan argument onda mozemo i bez zagrade
const printMyNameOne = name => {
  console.log(name);
}
printMyNameOne("Vuk3");


// Ako nemamo argumente u funkciji, moramo da imamo bar zagrade
const printMyNameNo = () => {
  console.log("Vuk4");
}
printMyNameNo();


// Ako imamo vise argumenata, moramo zagrade
const printMyNameAge = (name, age) => {
  console.log("Name: " + name);
  console.log("Age: " + age);
}
printMyNameAge("Vuk5", 27);


// Ako imamo samo jednu liniju koda koji treba da izvrsimo, odnosno imamo samo return jedan, onda mozemo i bez body-ja da pisemo
const multiply = (number) => number * 2;
console.log(multiply(27));
