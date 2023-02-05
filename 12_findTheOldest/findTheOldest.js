const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
      const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
      const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
      return oldestAge > currentAge ? oldest : person;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
