let day = "Monday"
console.log(day.length) //Length of String - 6
console.log(day.slice(0,4)) //Mon
let arr = day.split("d") //Splits the string at character "d"
console.log(arr[0]) //Mon
console.log(arr[1]) //ay

let date1 = '26'
let date2 = '28'
//Find the difference between 2 dates above
//convert the dates to integers and find the difference
let difference = parseInt(28) - parseInt(26)
console.log(difference)
//To convert Integer to string use "toString" method
console.log(difference.toString())

//trim() function is used to remove spaces preceeding and after String
let day2 = ' Wednesday '
console.log(day2.length)//11
day2 = day2.trim()
console.log(day2.length)//9

//indexOf() method is used to get the index of the Character in a string
let day4 = "Sunday is Funday"
console.log("Test" + day4.indexOf("day"))// returns the index of first character 'd' i.e. 3
console.log(day4.indexOf("day", 4)) //retruns the characrter index of 'd' and searching criteria is from position 4

//In string 'day4' find the number of occurancces of 'day' ***** IMPORTANT ***
let count = 0
let day5 = "funday is monday and sunday"
let value = day5.indexOf("day")
while(value!== -1){
    count++
    value = day5.indexOf("day", value+1)
}
console.log(count)



