let userInput = prompt("Type a number", 45);

function convertToCelcius(input) {
  let farenheight = (input - 32) * (5 / 9);
  return farenheight;
}

function describeTemperature(userFinput) {
  let tempInput = convertToCelcius(userFinput);
  if (tempInput < 0) {
    return "Very Cold";
  } else if (tempInput < 20) {
    return "Cold";
  } else if (tempInput < 30) {
    return "Warm";
  } else if (tempInput < 40) {
    return "hot";
  } else if (tempInput >= 40) {
    return "very hot";
  }
}

let results = describeTemperature(userInput);
let celcius = convertToCelcius(userInput);

alert(results + "I mean look at the Temp! it's" + " " + celcius);
