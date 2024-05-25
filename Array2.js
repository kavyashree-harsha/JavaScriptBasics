//map. filter and reduce functions in array

let marks = [10, 20, 30, 40, 50, 60]

//Get all the student marks which are above 30 => FILTER method can be used
let new_marks_array = marks.filter(item => item>30);
console.log(new_marks_array)

//Multiply all the elements of the new array with 3 => map function can be used
let multiplied_array = new_marks_array.map(item => item*3);
console.log(multiplied_array)

//Find the sum of all the elements of multiplied array => REDUCE function can be used
let total = multiplied_array.reduce((sum, item) => item+sum, 0)
console.log(total);

//Consider a new array which has duplicate elements, find the duplicates using REDUCE
let array_duplicate = [10, 10, 20, 30, 40, 50, 50, 60, 60, 70, 70, 90]
let no_duplicates = array_duplicate.reduce((accumulator, item) => {
    if(!(accumulator.includes(item)))
    {
        accumulator.push(item)
    }
    return accumulator
},[])
console.log(no_duplicates);

//SORTING of arrays (1. Sorting array with string, 2. Sorting array with numbers)
//1. Sorting array of Strings using sort() and reverse() function
let string_array = ["apple", "banana", "pear", "grapes", "berries", "cherry"]
console.log(string_array.sort()) //If it's string array just calling a sort() function would sort the array
console.log(string_array.reverse()) //Sorts the string array in reverse order

//2.Sorting a array of numbers by customised logic
let num_array = [22, 67, 9, 30, 88, 46, 3]
console.log(num_array.sort((a,b) => a-b));
//Sorting array in reverse order
console.log(num_array.sort((a,b)=>b-a))

