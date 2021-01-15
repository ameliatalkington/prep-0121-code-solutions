function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  return number * 60;
}

console.log(convertHoursToMinutes(2));

function personalizeGreeting(name) {
  return 'Hello ' + name;
}

console.log(personalizeGreeting('Amelia'));

function returnDatatype(data) {
  return typeof data;
}

console.log(returnDatatype(1078));

function addAndMultiplyBy5(num1, num2) {
  var add = num1 + num2;
  return add * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  var multiply = num1 * num2;
  return multiply / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  return circumference;
}

console.log(getCircleCircumference(5));

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(returnFullName('Amelia', 'Talkington'));

function cubeNumber(number) {
  return number * number * number;
}

console.log(cubeNumber(5));

function returnMathSentence(num1, num2) {
  var sum = num1 + num2;
  var sentence = 'If you add ' + num1 + ' and ' + num2 + ' together you get ' + sum + '.';
  return sentence;
}

console.log(returnMathSentence(5, 12));
