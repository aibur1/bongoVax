function vaxTrail(peopleList) {
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  for (const person of peopleList) {
    if (person.temperature < 100) {
      if (person.age >= 20 && person.age <= 30) {
        A.push(person);
      } else if (person.age >= 31 && person.age <= 40) {
        B.push(person);
      } else if (person.age >= 41 && person.age <= 50) {
        C.push(person);
      } else {
        D.push(person);
      }
    } else {
      D.push(person);
    }
  }

  A.sort((a, b) => a.age - b.age);
  B.sort((a, b) => a.age - b.age);
  C.sort((a, b) => a.age - b.age);
  D.sort((a, b) => a.age - b.age);

  return { A, B, C, D };
}


const test = vaxTrail();

console.log(test)

