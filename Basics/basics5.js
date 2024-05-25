//Classes in Javascript
class Person{
    age = 25;
    get location(){
        return 'Melbourne';
    }
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname(){
        return this.firstname + this.lastname;
    }
}

let p1 = new Person('Kavya', 'KP');
let p2 = new Person('Kavyashree', 'KPK');
console.log(p1.location);
console.log(p2.location); // () not required since its a getter method
console.log(p1.fullname());
console.log(p2.fullname());// () is required since its a function