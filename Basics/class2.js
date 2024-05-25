const Animal = require('./class1')
class Dog extends Animal{
    constructor(sound, name){
        super(sound)
        this.name= name
    }

}

let d = new Dog("woof woof", "Jessy");
console.log(d.sound);
console.log(d.name);