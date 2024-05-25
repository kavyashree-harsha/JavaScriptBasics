//Decalre an array
var marks = [10, 20, 30 , 40, 50]

//Size of an array
console.log(marks.length);

//adding elements to an array
marks.push(60) //Adds an element at the end of array
console.log(marks);

//unshift() function - adds an element at the beginning of an array
marks.unshift(70);
console.log(marks)

//Delete an element from array
marks.pop() // Deletes the last element
console.log(marks)

//indexOf function
console.log(marks.indexOf(30));

//includes function
var status = marks.includes(20);
console.log(status);
