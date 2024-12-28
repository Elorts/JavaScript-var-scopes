// 'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `You are millenial ${firstName}`;
//     }
//   }

//   printAge();
//   return age;
// }

// function aaa(a, b) {
//   console.log('sadasasdas' + arguments);
//   return a + b;
// }

// aaa(2, 5);
// let xx;
// const firstName = 'Jonas';
// calcAge(1991);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before', jessica);
console.log('After:', marriedJessica);
