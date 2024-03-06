class Explored{
    explored = {}

    setExplored(s){
        this.explored[s] = true
    }

    hasBeenExplored(s){
        return this.explored[s]
    }

    static  makeExploredString(a,b,operation,bucket){

        // if it's a subtract on a 0 that means it's the same as an add on 0. Making search space smaller
        if(b === 0 && operation === 'subtract'){
            operation = 'add'
        }

        // + and * operations will result in the same value regardless of order
        // set a and b to be ordered so when the explored string is made it is sorted and duplicate like pairs aren't explored further
        if(operation === 'add' || operation === 'multiply'){
            let max = a
            let min = b
            if(a < b){
                max = b
                min = a
            }
            a = max
            b = min
        }

        return a.toString()+":"+b.toString()+operation+bucket.toString()
    }

    /**
     * @return {boolean} return true if has already been explored
     */
    explore(a,b,operation,bucket){
        const exploredString= Explored.makeExploredString(a, b, operation, bucket)
        if(this.hasBeenExplored(exploredString)){
            return true
        }
        this.setExplored(exploredString)
        return false
    }
}

module.exports = Explored