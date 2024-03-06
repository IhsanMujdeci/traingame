/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    const setRow = {}
    const setColumn = {}

    for(let m = 0; m < matrix.length; m++){
        for(let n = 0; n < matrix[m].length; n++){
            if(matrix[m][n] === 0){
                setRow[m] = true
                setColumn[n] = true
            }
        }
    }

    for(let m = 0; m < matrix.length; m++){
        for(let n = 0; n < matrix[m].length; n++){
            if(setRow[m] || setColumn[n]){
                matrix[m][n] = 0
            }
        }
    }
    return matrix
};

var setZeroes2 = function(matrix) {

    let rowZero = false

    const colsLen = matrix[0].length

    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[r].length; c++){
            if(matrix[r][c] === 0){
                matrix[0][c] = 0

                if(r > 0){
                    matrix[r][0] = 0
                } else {
                    rowZero = true
                }
            }
        }
    }

    for(let r = 1; r < matrix.length; r++){
        for(let c = 1; c < matrix[r].length; c++){
            if(matrix[0][c] === 0 || matrix[r][0] === 0){
                matrix[r][c] = 0
            }
        }
    }
    if(matrix[0][0] === 0){
        for(let r = 0; r < matrix.length; r++){
            matrix[r][0] = 0
        }
    }

    if(rowZero === true){
        for(let c = 0; c < colsLen; c++){
            matrix[0][c] = 0
        }
    }

    return matrix
};

// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
// console.log(setZeroes2([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))


const messageMap = {}

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
const shouldPrintMessage = function(timestamp, message) {
    if(messageMap[message]){
        if(timestamp - messageMap[message] < 10){
            return false
        }
    }
    messageMap[message] = timestamp
    return true
};

const i = [[],[100,"bug"],[111,"bug"]]

i.forEach(x => console.log(shouldPrintMessage(...x)))