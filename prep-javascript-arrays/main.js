var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Languages Array: ' + languagesArray);
console.log('Languages Array Length: ' + languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Array: ' + languagesArray);
languagesArray.pop();
console.log('Last index removed: ' + languagesArray);

languagesArray.unshift('C++');
console.log('Added element to front: ' + languagesArray);

languagesArray.shift();
console.log('Removed first element: ' + languagesArray);

var thirdElement = languagesArray[2];
console.log('Third element in languagesArray: ' + thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of this array is ' + arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item in the array is ' + lastItem);
