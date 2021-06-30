// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    let match = drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
    return match;
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(names => names.slice(0, letters.length) === letters);
}

const driverObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driverObj, stringName) {
    return driverObj.filter(dataName => dataName.name === stringName);
}