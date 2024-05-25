//There are 2 type of functions in javascript

//1. Normal function which has name and can be invoked by just calling the name of the function (All normal functions are preceeded with "function" keyword)
function addNumbers(a,b){
    return a+b;
}
console.log(addNumbers(22, 44));

//2. Anonymous functions without name and followed by fatted arrow pipe, function is called using the VARIABLE name which holds the function return value
let sum = (a,b) => a+b;
console.log(sum(22, 44));

//Scope of var, let and const at function level and global levels
var greet = "Morning"
if(1==1){
    var greet = "evening"
}
function greetMsg(){
    var greet = "noon"
    console.log(greet)
}
console.log(greet) //value of greet = evening
greetMsg() //value of greet = noon
