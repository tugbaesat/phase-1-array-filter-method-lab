// Code your solution here
function findMatching(drivers, name) {
  const matchingDrivers = drivers.filter(function (item) {
    return item.toUpperCase() === name.toUpperCase();
  });
  return matchingDrivers;
}

function fuzzyMatch(drivers, str) {
  const matchingDrivers = drivers.filter(function (item) {
    return item.slice(0, str.length).toUpperCase() === str.toUpperCase();
  });
  return matchingDrivers;
}

function matchName(drivers, str) {
  const matchingDrivers = drivers.filter(function (item) {
    return item.name.slice(0, str.length).toUpperCase() === str.toUpperCase();
  });
  return matchingDrivers;
}
