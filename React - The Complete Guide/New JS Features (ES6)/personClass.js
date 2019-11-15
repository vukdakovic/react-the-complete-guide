class Person {
  constructor() {
    this.gender = "male";
  }
  myGender = () => {
    console.log("What/'s my gender: " + this.gender + "!");
  }
}

class Vuk extends Person {
  constructor() {
    super();
    this.name = "Vuk"
  }

  myName = () => {
    console.log("What/'s my name: " + this.name + "!");
  }
}

// Nova ES7 sintaska nam omogucava da pravimo classes bez constructor metode i bez this i obicnog nacina pravljenja metoda. Sad moze ovako.
class ES7Person {
  gender = "male"
  myMethod = () => {}
}
