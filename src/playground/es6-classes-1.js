
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveller extends Person {

    constructor(name, age, homeLocation) {
        super();
        this.homeLocation = homeLocation;
    }

    hasHomeLocatiom() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if( this.hasHomeLocatiom() ) {
            greeting += ` And I am visiting ${this.homeLocation}`
        }

        return greeting;
    }
}
const perso = new Traveller('Shreyas', 26,);
const perso2 = new Traveller('Shreyas Home', 23, 'Mumbai');

console.log(perso.getGreeting());
console.log(perso2.getGreeting());