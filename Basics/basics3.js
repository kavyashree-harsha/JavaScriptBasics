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

//slice() function
let m1 = [10, 20, 30, 40, 50]
submarks = m1.slice(2,5)
console.log(submarks);

//reduce() method to add all the elements of an array
let a1 = [10, 20, 30, 40, 50]
let sum = 0;
let total = a1.reduce((sum,a)=>sum+a,0)
console.log(total)

//filter() method to get the even numbers in an array
let scores = [20, 40, 57, 39, 82, 56]
let evenScores = scores.filter(score=>(score%2 == 0))    
console.log(evenScores)
//Now multiply these evenscores by 3 using map()
let multiplyevenScores = evenScores.map(scores=>scores*3);  //let evenScores = scores.filter(score=>(score%2 == 0)).map(scores=>scores*3)
console.log(multiplyevenScores);