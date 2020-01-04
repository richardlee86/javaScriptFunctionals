function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(
  "isEven Function returns true if an argument is even and false if not"
);

function numFactorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * numFactorial(num - 1);
  }
}

function kebabToSnake(string) {
  var newString = string.replace(/-/g, "_");
  return newString;
}
