//Objects in Javascript - Objects are nothing but collection of Properties
//declaring an object in JS
let person = {
    firstname: 'Kavyashree',
    lastname:'Prabhuswamy',
    fullname: function(){
        console.log(this.firstname + this.lastname);
    }
}
console.log(person.firstname);
person.gender = 'female';
console.log(person);
delete person.gender;
console.log(person);
console.log(person.fullname());
//Iterating the properties of an object
let emp ={
    id: 22,
    name: 'Kavya',
    role: 'tester'
}
for(key in emp){
    console.log(emp[key]);
}