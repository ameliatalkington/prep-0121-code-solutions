var person = { firstName: 'Amelia', lastName: 'Talkington', hobby: 'eating' };
console.log(JSON.stringify(person));

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'engineer';
console.log("The person's current job is: " + person.job);

person.previousJob = 'chef';
console.log("The person's previous job was: " + person.previousJob);

console.log('The complete person object: ' + JSON.stringify(person));

var myCar = { make: 'ford', model: 'f-150', year: '2000' };
console.log('Car information: ' + JSON.stringify(myCar));

myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] +
' ' + myCar['model'] + '.');

myCar['color'] = 'blue';
console.log('My full car info: ' + JSON.stringify(myCar));
