function recurse(subset, sum, remaining, explored, num = 0){
    if(sum > 6){
        return
    }
    if((sum + remaining) < 6){
        return
    }
    if(sum === 6){
        console.log(explored)
        return
    }

    for(let s in subset){
        let candidate = subset[s]
        num += 1
        explored[s] = num
        delete subset[s]
        recurse(subset, sum + candidate, remaining - sum ,explored, num)
        num -= 1
        explored[s] = false
        subset[s] = candidate
    }
}


const subset = [1,2,3,4,5]
const tot = subset.reduce((p,c)=> p+c, 0)

recurse(subset, 0, tot, subset.map(x=>false))
// // console.log(itt)
//
// const arr = [1,2,3]
// delete arr[2]


// arr[10] = true
// for(const a of arr){
//     console.log(a)
// }