'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You are millenial ${firstName}`;
    }
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
