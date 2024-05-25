//if condition
const flag = true
if(flag){
    console.log("Inside if");
}
else{
    console.log("Inside else");
}

if(!flag){
    console.log("Inside if");
}
else{
    console.log("Inside else");
}

//while loop
let i=0;
while(i>10){
    i++;
    console.log("Inside while loop "+i);
}

//do-while loop
do{
i++;
}while(i>10);
console.log(i);

//Get common mutiples of 2 and 5 from 1 to 10
for(let n=1; n<=10; n++){
    if((n%2 == 0) && (n%5 ==0 )){
        console.log(n);
    }
}
