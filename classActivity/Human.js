// class Human {
//     constructor(name, age, complexion) {
//         this.name = name;
//         this.age = age;
//         this.complexion = complexion;

//         this.describe = ()=>{
//             return `My name is ${this.name}, I am ${this.age} years old.`;
//         };
//     }
// };

// let personOne = new Human("stephen", 20, "chololate")
// console.log(personOne)
// console.log(personOne.describe())

// module.exports = Human;

class Human{
    #name;
    #age;

    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }

    set name(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    speaks(){
        return `${this.name} speaks english`
    }
}
module.exports = Human;