'use strict';
//Functiie Constrcutor. Def.

//Fuctiile constructor sunt functii speciale pentru programarea pe obiecte. OOP.

//Aceasta functie defineste comportamentul obiectului si este folosita cu cuvantul cheie "new" .

//Numele constructorulu incepe cu litera mare ceea ce inseamna ca este destinat sa realizeze obiecte.

//Proprietatile si metodele sunt atribuite prin intermediul cuvantului "this"

//"new" este apelat pentru a realiza un nou obiect

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('matilda', 20217);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

//Realizarea unei functii Constructor.

//1.Se defineste functia constructor.

function Car(brand, yers) {
  //Definim numele constructorului folosind litera mare.

  this.brand = brand; //Proprietetile si metodele sunt atribuite folosind this.
  this.yers = yers; //this va fi un obiect gol la inceput iar valorile firstName si birthName vor fi atribuite acelui nou obiect.
}

//2.Adauga proprietate folosind 'this
//In interiorul constructorului folosim cuvantul "this" pentru a crea proprietati ale unui obiect creat
//"this " se refera la instanta noua a obiectului creat

this.brand = brand;
this.year = year;

//3.Realizarea unei noi functii folosind "new"

//Pentru a realiza un obiect nou din functia constructor folosim cuvantul "new"

const myCar = new car('Toyota', 2022); //In acest caz myCar devine un obiect cu proprietatile brand si year initializate cu valorile Toyota si 2022

//4.Adauga metode folosind prototipul
//Daca vream ca toate metodele create din functia constructor sa aiba aceasi metoda, le poti adauga in prototip.

Car.prototype.getDetails = function () {
  retun`${this.brand} - ${this.year}`;
};


//Prototypes

//Prototypes este un mecanism in javascript care permite obiectelor sa mosteneasca proprietatea altor obiecte. Prin intermediul prototipurilor,JavaScript implementeaza un rip de mostenire numit mostenirea prototipala.
//Fiecare obiect in JavaScript are un prototip care este un alt obiect de la care obiectul mosteneste metode si proprietati.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('matilda', 20217);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Prototype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.osPrototypeOf(jonas));
console.log(Person.prototype.osPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapien ';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

const arr = [3, 5, 4, 5, 6, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prottotype.uniwue = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


//Challange
//Execitiu

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10; // Am schimbat aici pentru a crește viteza la accelerare
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5; // Viteza scade cu 5 la frânare
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('Bmw', 120);
const mescedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


//ES6 Classes

//Clas Expression
//const PersonCl=class{}

//Class Declaration
class PersonCl {
  constructor(fisrtName, birthYear) {
    this.fisrtName = fisrtName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey${this.fisrtName}`);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log('jessica');
jessica.calcAge();

console.log(jessica.__prot0__ == PersonCl.prototype);
//PersonCl.prototype.greet = function () {
//console.log(`Hey${this.fisrtName}`);
//};
jessica.greet();


//Setters and Getters
//Sunt metode speciale care permit controul unor obiecte in JavaScript.
//1.Getter este o modalitate de a returna valoarea unei proprietati.
//Se defineste cu ajutorul cuvantului "get'
//2.Settrs
//O modaliatate prin care se seteaza valoarea unei proprieteti
//Se defineste cu ajutorul cuvantului 'set'

const account = {
  owner: 'Jonsa',
  movement: [200, 5366, 444, 552],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);


//Object Create

//Object.create() este o metoda in javaScript prin care se creaza un obiect utilizand un obiect care exista drept prototip. Noul obiect mostenste toate proprietatile de la acel prototip.
//Practic putem crea un lant de prototipali intre obiecte.

const PersonProto = {
  CalcAge() {
    console.log(2037 - this.birthYear);
  },
  init(fistName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven ';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
MediaStreamTrack.init('Srah', 1997);
sarah.calcAge();



//Challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} hm/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} hm/h `);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


//Mosterirea intre clase.
//INheritance between classes :Construction Functio

const Person = function (firstName, birthName) {
  this.firstName = firstName;
  this.birthName = birthName;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear, (this.course = course));
  this.course = course;
};
//Linke Prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studey ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Scientes');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor.constructor);


//Monstenirea Claselor in ES6
//Mostenirea claselor folosind ES6 este un mod de a lucra cu clasele de mostenitori in JavaScript. ES6 intoduce cuvantul cheie numit class care permite definirea de clase si mostenitori intru-un mod similar cum sunt si alte limbaje orientate pe obiecte.
//O clasa este definita folosind cuvantul cheie "class"
//Clasele pot mosteni si alte clase folosind "extends"
//

class PersonClP {
  costructor(fullName, birthName) {
    this.fullName = fullName;
    this.birthName = birthName;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.include('')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('hey there ');
  }
}
class Student extends PersonCl {
  constructor(fullName, birthName, course) {
    //Mereu trebuie sa fie primul.
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${'this.course'}`);
  }
  calcAge() {
    console.log(`I am ${
      2037 - this.birthYear
    }` years old, but as a student i feel more like $ { 2037-this.birthYear +10 });
  }
}
const marth = new StudentCl('Martha Jonas', 2012, 'Computer Scientis');
martha.introduce();
martha.calcAge;


//Mostenire intre clase s object.create ES6
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// Cream StudentProto moștenind de la PersonProto
const StudentProto = Object.create(PersonProto);

// Suprascriem metoda init pentru a include 'course'
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear); // Apelăm init din PersonProto
  this.course = course;
};

// Adăugăm o metodă introduce
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); // Cream obiectul 'jay'
jay.init('Jay', 2010, 'Computer Science'); // Inițializăm proprietățile pentru 'jay'
jay.introduce(); // Apelăm metoda introduce
jay.calcAge(); // Apelăm metoda moștenită calcAg


//Class

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements =[];
    this.local = navigator.language;

    console.log(`thanks for openig an account ` ${owner})
  }

  //Public interface 
  deposit(val){
    this.movements.push(val);
  }
  withdraw(val){
    this.deposit(-val);
  }
  approveLoan(val){
    return true;
  }
  requestLoan(val){
    if( this.approveLoan(val)){
      this.deposit(val);
      console.log(`load approved`);
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 111 []);
console.log(acc1);

//acc1.movements.push(250);
//acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);



//Encapsulation
//Incapsularea este o metoda in JavaScript pentru a grupa proprietatile si functiile care opereaza asupa unor data(clase sau obiecte ) si restrictioneaza accesul direct la anumite componete ale acelui obiect.
//Incapsulare este o metoda de protectie a datelor
//Codul este mai usor de manipulat si intretinut
//Putem controla ce date sunt expuse si ce date sunt expuse
//Puteam modifica aspecte ale uni obiect fara a afecta alte parti


//Ex
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;  // public
    this._lastName = lastName;   // semi-privat (convențional)
  }

  // Metodă publică
  getFullName() {
    return `${this.firstName} ${this._lastName}`;
  }

  // Setter pentru a actualiza numele de familie
  set lastName(newLastName) {
    if (newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log('Invalid last name');
    }
  }

  // Getter pentru numele de familie
  get lastName() {
    return this._lastName;
  }
}

const person = new Person('John', 'Doe');
console.log(person.getFullName());  // Output: John Doe
person.lastName = 'Smith';          // Actualizare validă
console.log(person.getFullName());  // Output: John Smith


