const fs = require("fs");

const args = process.argv.slice(2);
const filenameIn = args[0];
const filenameOut = args[1];

const coordPrecision = 2;

const json = JSON.parse(fs.readFileSync(filenameIn));

const roundNumber = (number) => {
  return Math.round(number * 10) / 10;
}

const roundNestedList = (item) => {
  if (Array.isArray(item)) return item.map(roundNestedList);
  else return roundNumber(item);
}

json.features.forEach((feature) => {
  feature.geometry.coordinates = feature.geometry.coordinates.map(
    roundNestedList
  );
});

console.log(JSON.stringify(json));