function recurse(node){
    // if(node.values.length === 1){
    //     return node
    // }

}


const input = '16^2/(2*(4+5))+4/2'
const string = '16^2/(2*(4+5))+4/2'
const input2 = '1+2'

// const tokens = input.split(/[\+\-\*/^()]/g)
// const tokens = input.split(/[\+\-\*/^()]/g)

const operators = {
    '^': true,
    '+': true,
    '*': true,
    '-': true,
    '/': true,
    '(': true,
    ')': true
}
const arr = []
let acc = ''
for(const s of string){
    if(operators[s] !== true){
        acc += s
        continue;
    }
    if(acc){
        arr.push(acc)
    }
    arr.push(s)
    acc = ''
}
if(acc){
    arr.push(acc)
}

console.log(arr)
