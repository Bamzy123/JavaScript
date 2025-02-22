const Human = require("./Human");

class Person extends Human{
    #gender

    constructor(name, age, gender){
        super(name,age);
        this.#gender = gender
    }

    get speaks(){
        return`${this.name} speaks igbo`
    }
}

let personOne = new Person ("Stephen", 20, "Male");
console.log(personOne.speaks)