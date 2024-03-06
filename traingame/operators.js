function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function power(a, b){
    return a ** b
}

function modulo(a,b) {
    return a % b
}

function factorial(a) {
    let val = 1;
    for (let i = 2; i <= a; i++){
        val = val * i;
    }
    return val;
}

const operators = [
    add,
    subtract,
    multiply,
    divide,
    power,
    modulo,
    factorial
]
const operatorsNoFactorial = [
    add,
    subtract,
    multiply,
    divide,
    power,
    modulo
]

const operatorsPlusMinus = [
    add,
    subtract,
]


const operatorMap = {
    add: '+',
    subtract: '-',
    multiply: 'x',
    divide: '/',
    power: '^',
    modulo: '%',
    factorial: '!'
}

// const operators = [
//     {fn: add, syntax: '+'},
//     {fn: subtract, syntax: '-'},
//     {fn: multiply, syntax: 'x'},
//     {fn: divide, syntax: '/'},
//     {fn: power, syntax: '^'},
//     {fn: modulo, syntax: '%'},
//     {fn: factorial, syntax: '!'}
// ]

module.exports = {
    operatorMap,
    operators,
    operatorsNoFactorial,
    operatorsPlusMinus
}