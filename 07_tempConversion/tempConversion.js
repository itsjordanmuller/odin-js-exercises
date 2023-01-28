const convertToCelsius = function(fahrenheit_temp) {
  return Math.round((fahrenheit_temp - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius_temp) {
  return Math.round((celsius_temp * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
