
function getTail(arr){
    return arr[arr.length - 1]
}

// Function to find nearest smallest tower
function nearestSmallerTower(arr) {
    let n = arr.length;
    let pre = [];
    let suf = [];
    let res = new Array(n).fill(-1);

    // Make prefix stack
    for (let i = 0; i < n; i++) {
        while (pre.length > 0 && getTail(arr) >= arr[i]) {
            pre.pop();
        }

        // push value of tail to res[i]
        if (pre.length > 0) {
            res[i] = getTail(arr);
        }

        // push index of i
        pre.push(i);
    }

    // Make suffix stack
    for (let i = n - 1; i >= 0; i--) {
        while (suf.length > 0 && arr[suf[suf.length - 1]] >= arr[i]) {
            suf.pop();
        }
        if (suf.length > 0) {
            if (res[i] !== -1) {
                if (Math.abs(res[i] - i) === Math.abs(suf[suf.length - 1] - i)) {
                    if (arr[res[i]] > arr[suf[suf.length - 1]]) {
                        res[i] = suf[suf.length - 1];
                    }
                } else if (Math.abs(res[i] - i) > Math.abs(suf[suf.length - 1] - i)) {
                    res[i] = suf[suf.length - 1];
                }
            } else {
                res[i] = suf[suf.length - 1];
            }
        }
        suf.push(i);
    }

    return res;
}

// Test case
// let arr = [1, 3, 2];
let arr = [4, 8, 3, 5, 3, 9, 11, 1, 2 ];

// Function call
let ans = nearestSmallerTower(arr);
// for (let it of ans) {
//     console.log(it + " ");
// }