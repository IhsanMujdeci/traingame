const Node = require('./node')
const {operators, operatorsNoFactorial, operatorsPlusMinus} = require("./operators");
const Explored = require("./explored");

const explored = new Explored()
let tot = 0
let searchSpace = 0
function recurse(node){
    if(node.numberBucket.length === 1){
        if(node.numberBucket[0] === 10){
            node.printLog()
            console.log()
            tot ++
        }
        return node
    }

    const bucket = node.numberBucket

    for (let i = 0; i < bucket.length; i++) {
        for (let j = 0; j < bucket.length; j++) {
            for(let o of operators) {
                searchSpace++
                // i and j would be same number in array
                if(i === j){
                    continue;
                }
                // these operations return the same value, don't explore this space
                if(o.name === 'factorial' && bucket[i] === 1 || bucket[i] === 2){
                    continue
                }
                const calcValue = o(bucket[i], bucket[j]);
                // stop factorial or other operations exploring very high values or negative values.
                if(calcValue > 10000 || calcValue < 0){
                    continue
                }
                // if is a float this breaks games rules
                if(calcValue % 1 !== 0){
                    continue;
                }
                let newBucket = undefined

                const indexesToRemove = []
                // factorial always has one element removed and replaced
                indexesToRemove[i] = true
                // all other operations have the second element removed as well
                if(o.name !== 'factorial'){
                    indexesToRemove[j] = true
                }
                newBucket = removeArrayElements(bucket, indexesToRemove)
                newBucket.push(calcValue)

                // sort the bucket to the hasBeenExplored can match on buckets with same values but at separate positions
                newBucket.sort()

                if(explored.explore(bucket[i], bucket[j], o.name, newBucket)){
                    continue
                }
                const child = new Node(node, newBucket)
                child.addLog(node.logs, bucket[i], bucket[j], o.name, calcValue, newBucket)
                node.addChild(recurse(child))
            }
        }
    }
}

function simpleRecursion(node){
    if(node.numberBucket.length === 1){
        if(node.numberBucket[0] === 10){
            node.printLog()
            console.log()
            tot ++
        }
        return node
    }

    const bucket = node.numberBucket

    for (let i = 0; i < bucket.length; i++) {
        for (let j = 0; j < bucket.length; j++) {
            for(let o of operatorsNoFactorial) {
                searchSpace++
                // i and j would be same number in array
                if(i === j){
                    continue;
                }

                const calcValue = o(bucket[i], bucket[j]);
                // don't allow negative numbers
                if(calcValue < 0){
                    continue
                }
                // don't allow floats
                if(calcValue % 1 !== 0){
                    continue;
                }
                const newBucket = removeArrayElements(bucket, {[i]: true, [j]: true})
                newBucket.push(calcValue)
                const child = new Node(node, newBucket)
                child.addLog(node.logs, bucket[i], bucket[j], o.name, calcValue, newBucket)
                node.addChild(simpleRecursion(child))
            }
        }
    }
}

function plusMinusRecursion(node){
    if(node.numberBucket.length === 1){
        // if(node.numberBucket[0] === 37){
        //     node.printLog()
        //     console.log()
        //     tot ++
        // }
        console.log(node.numberBucket[0])
        return node
    }

    const bucket = node.numberBucket

    for (let i = 0; i < bucket.length; i++) {
        for (let j = 0; j < bucket.length; j++) {
            for(let o of operatorsPlusMinus) {
                searchSpace++
                // i and j would be same number in array
                if(i === j){
                    continue;
                }
                // these operations return the same value, don't explore this space
                if(o.name === 'factorial' && bucket[i] === 1 || bucket[i] === 2){
                    continue
                }
                const calcValue = o(bucket[i], bucket[j]);
                // stop factorial or other operations exploring very high values or negative values.
                if(calcValue > 100000000 || calcValue < 0){
                    continue
                }
                // if is a float this breaks games rules
                if(calcValue % 1 !== 0){
                    continue;
                }
                let newBucket = undefined

                const indexesToRemove = []
                // factorial always has one element removed and replaced
                indexesToRemove[i] = true
                // all other operations have the second element removed as well
                if(o.name !== 'factorial'){
                    indexesToRemove[j] = true
                }
                newBucket = removeArrayElements(bucket, indexesToRemove)
                newBucket.push(calcValue)

                // sort the bucket to the hasBeenExplored can match on buckets with same values but at separate positions
                newBucket.sort()
                //
                if(explored.explore(bucket[i], bucket[j], o.name, newBucket)){
                    continue
                }
                const child = new Node(node, newBucket)
                child.addLog(node.logs, bucket[i], bucket[j], o.name, calcValue, newBucket)
                node.addChild(plusMinusRecursion(child))
            }
        }
    }
}

function removeArrayElements(arr, positions){
    const newArr = []
    for(const a in arr){
        if(positions[a] !== undefined){
            continue
        }
        newArr.push(arr[a])
    }
    return newArr
}

const numbers = [1,2,3,4,5,7,8,9];
let root = new Node(undefined, numbers)
// // console.log('starting numbers', numbers.join(', '),'\n')
// recurse(root)
// // simpleRecursion(root)
// console.log('solutions found', tot)
// console.log('search space', searchSpace)

plusMinusRecursion(root)

