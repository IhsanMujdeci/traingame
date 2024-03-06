const {operatorMap} = require("./operators");

class Node {
    children = []
    parent = undefined
    numberBucket = []
    logs = []

    constructor(parent, numberBucket) {
        this.parent = parent
        this.numberBucket = numberBucket
    }

    addChild(child){
        this.children.push(child)
    }

    printLog(){
        this.logs.forEach( i => console.log(i))
    }

    /**
     *
     * Return example
     * !0 = 1
     * remaining 1, 1, 2, 2
     *
     * @param {string} parentLog
     * @param {number} a
     * @param {number} b
     * @param {string} operatorName
     * @param {number} calcValue
     * @param {number[]} bucket
     */
    addLog(parentLog, a, b, operatorName, calcValue, bucket){
        this.logs.push(...parentLog)
        let operatorString = `${a} ${operatorMap[operatorName]} ${b} = ${calcValue}`
        if(operatorName === 'factorial'){
            operatorString = `!${a} = ${calcValue}`
        }
        this.logs.push(`${operatorString} 
remaining ${bucket.join(', ')}`)
    }
}
module.exports = Node