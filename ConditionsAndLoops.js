//if-else condition
let a = 2
if(a!=3)
{
    console.log("a is not eql to 3")
}
else{
    console.log("a is eql to 3")
}

//nested if-else condition
if(a == 2){
    console.log("a eql to 2");
    if(a<1){
        console.log("a less than 1");
    }
}
else{
    console.log("a is not eql to 3")
}

// ***** Loops in Javascript *****
//for loop
for(let i =0; i<10; i++){
    console.log(i);
}

//while loop
let j = 0;
while(j<10){
    console.log(j);
    j++;
}

//do while loop : do-while is used when you want to run a code block at least one time.
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);