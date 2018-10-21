const getFirstName = (name) => {
    return name.split(' ')[0];
};

const getFirstNameExp = (name) => name.split(' ')[0];

console.log('getFirstName', getFirstName('mike shinoda'));
console.log('getFirstNameExp', getFirstNameExp('cory ravanda'));

const add = function(a, b) {
    console.log(arguments)
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
}

const user = {
    name: 'Andrew',
    lived: ['Mum', 'Pun', 'Mang'],
    placesLived() {
        console.log(this.name);
        console.log(this.lived);
        this.lived.forEach(
            (city) => {
                console.log(this.name + ' lived  in ' + city);
            }
        )

    },
    consoleFunc(){
        console.log('consoleFunc',this.name);
    }
}

console.log(user.placesLived());
console.log(user.consoleFunc());

const multiplyNum = {
    numbers: [1,2,4,5,6,7],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map( number => number*this.multiplyBy )
    }
}

console.log(multiplyNum.multiply());