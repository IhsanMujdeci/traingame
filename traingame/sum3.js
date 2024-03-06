function triplet(input, target){
    let sorted = input.sort((a,b)=>a-b)
    for(let i = 0; i < sorted.length - 2; i++){
        let l = i + 1
        let r = sorted.length - 1

        while(l < r){
            const sum = sorted[i] + sorted[l] + sorted[r]
            if(sum === target){
                return [sorted[i], sorted[l], sorted[r]]
            }
            if(sum < target){
                l++
            } else {
                r--
            }
        }
    }
}

function tripletMap(input, target){
    const map = {};
    input.forEach((x,i)=> map[x] = i)

    for(let i = 0; i < input.length - 1; i++){
        for(let j = i + 1; j < input.length; j++){
            let diff = target - (input[i] + input[j])
            const foundDiff = map[diff]
            if(foundDiff && foundDiff !== i && foundDiff !== j){
                return [input[i], input[j], diff]
            }
        }
    }
}

let input = [ 1,2,3,4 ];
// console.log(triplet(input, 22))
console.log(tripletMap(input, 22))