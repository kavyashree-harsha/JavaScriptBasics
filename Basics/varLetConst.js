//var - global / function level
//let - global / block level

let greet = "Morning";

if(1==1){
    let greet = "Evening";
}

function greetNoon(){
    let greet = "Noon";
}
greetNoon();
console.log(greet); //Evening - Output is Evening because var is replaced in 'if' block.


//In the above example if we change var to 'let' then the output will be "Morning" because let is globally / block level scoped.