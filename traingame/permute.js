function permute(bucket, acc = []){
    if(acc.length === bucket.length){
        console.log(acc)
        return
    }

    for(const i in bucket){
        acc.push(bucket[i]);
        delete bucket[i]
        permute(bucket, acc)
        bucket[i] = acc.pop()
    }
}


function permuteSane(bucket, acc = []){
    if(bucket.length === 0){
        console.log(acc)
        return;
    }

    for(let i = 0; i < bucket.length; i++){
        acc.push(bucket[i]);
        const bucketCopy = [...bucket.slice(0, i), ...bucket.slice(i + 1)]
        permuteSane(bucketCopy, acc)
        bucket[i] = acc.pop()
    }
}

function permuteMedium(bucket, acc = []){

    if(bucket.length === 0){
        console.log(acc)
        return;
    }

    for(let i = 0; i < bucket.length; i++){
        permuteMedium([...bucket.slice(0, i), ...bucket.slice(i + 1)],[...acc, bucket[i]])
    }

}

function permuteSmall(bucket, acc = []){
    bucket.length ? bucket.forEach((x, i)=> permuteSmall([...bucket.slice(0, i), ...bucket.slice(i + 1)], [...acc, x])) : console.log(acc)
}

/*

input 1,2,3

steps

1. acc = "a", i = 0, bucket = "b,c"
2. acc = "a,b", i = 0, bucket = "c"
2. acc = "a,b,c" i = 0, bucket = ""

breaks out of recursion for first time, pops out i of bucket

4. acc "a,b", i = 0, bucket = "c"
5. acc ""

3.

 */

// stack = first in last out
// queue = first in first out

function loopPermute(bucket = []){
    const permutations = [];

    const stack = [ [[], bucket.slice()] ]

    while(stack.length){
        let [acc, workingBucket] = stack.pop()

        for(let i = workingBucket.length-1; i >= 0; i--){
            let accCopy = acc.slice()
            accCopy.push(workingBucket[i]);
            if(accCopy.length === bucket.length){
                permutations.push(accCopy)
                continue;
            }
            stack.push([
                accCopy,
                [...workingBucket.slice(0, i), ...workingBucket.slice(i+1)]
            ])
        }
    }
    return permutations
}


function removeArrayPosition(i, arr = []){
    return [...arr.slice(0, i), ...arr.slice(i+1)]
}


const inputArray = ['a', 'b', 'c'];
// const l = permute(inputArray)
// permuteMedium(inputArray)
permuteSane([1,2,3,4,5,7,8,9])
// permuteSmall(inputArray)

// console.log(l)
// const permutations = permute(inputArray);
// console.log(permutations)