class Node {
    children = []
    parent = undefined
    numberBucket = []
    value = undefined;
    logs = []
    isFactorial = false

    constructor(parent, value, isFactorial) {
        this.parent = parent
        this.value = value
        this.isFactorial = isFactorial
    }

    addChild(child){
        this.children.push(child)
    }

    addNumberBucket(numberBucket){
        this.numberBucket = numberBucket
    }

    isRoot(){
        return this.parent === undefined
    }

    printLog(){
        this.logs.forEach( i => console.log(i))
    }

    addLog(log){
        this.logs = (log)
    }
}

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

const operators = [add, subtract, multiply, divide, power, modulo]
const allOperators = [add, subtract, multiply, divide, power, modulo, factorial]
const operatorMap = {
    add: '+',
    subtract: '-',
    multiply: 'x',
    divide: '/',
    power: '^',
    modulo: '%',
    factorial: '!'
}

function makeLog(a,b, fnName, output, bucket){
    let operatorString = `${a} ${operatorMap[fnName]} ${b} = ${output}`
    if(fnName === 'factorial'){
        operatorString = `!${a} = ${output}`
    }
    return `${operatorString} 
remaining ${[output, ...bucket].join(', ')}`
}

function isInt(n) {
    return n % 1 === 0;
}

function recurse(node){
    if(!node.numberBucket.length){
        if(node.value === 10){
            node.printLog()
            process.exit()
        }
        return node
    }

    const numberBucket = node.numberBucket

    const operatorSelection = node.isFactorial ? operators : allOperators


    for (let i = 0; i < numberBucket.length; i++) {
        for(let o of operatorSelection){
            const childValue = o(node.value, numberBucket[i]);
            if(childValue > 1000 || childValue < 0){
                continue
            }
            if(!isInt(childValue)){
                continue;
            }
            const child = new Node(node, childValue, o.name === 'factorial')
            let newBucket = [...numberBucket.slice(0, i), ...numberBucket.slice(i + 1)]
            if(o.name === 'factorial'){
                newBucket = [...numberBucket]
            }
            child.addLog([...node.logs, makeLog(node.value, numberBucket[i], o.name, childValue, newBucket)])
            child.addNumberBucket(newBucket)
            node.addChild(recurse(child))
        }
    }
}

let root = new Node()
const numbers = [6,6,5,6];
root.numberBucket = numbers

console.log('starting numbers', numbers.join(', '))

for (const n in root.numberBucket) {
    const newBucket = [...root.numberBucket.slice(0, n), ...root.numberBucket.slice(n + 1)]
    const child = new Node(root, root.numberBucket[n])
    child.addNumberBucket(newBucket)
    root.addChild(recurse(child))
}

