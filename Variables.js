//There are 5 types of variables var, let, const, null, boolean
// "typeof()" function is used know the type of the variable
// "!" -> not is used as negation operation for boolean values
// var (available in es5 engine), let, const (available in es6 engine)

let a = 5;
console.log(typeof(a));
console.log(a);
a = "Kavayshree"; //reassigning is allowed, but not redeclaring
console.log(a);


var b = 6; 
console.log(b);
console.log(typeof(b));
var b = "Kavya"; //both redeclaring and reassigning is allowed
console.log(b);


const c = 8;
console.log(typeof(c));
//c = "KP"; //Runtime error - TypeError: Assignment to constant variable.
//const c = "kp" // Error, redeclaring and reassigning is not allowed. 
//console.log(c); //Runtime error - TypeError: Assignment to constant variable.

let d = true
console.log(!d);