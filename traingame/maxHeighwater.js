/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length-1

    let max = 0

    while (l < r){
        let minPointer = Math.min(height[l],height[r])
        max = Math.max(max, minPointer * (r - l))
        if(height[r] > height[l]){
            l++
        } else {
            r--
        }
    }
    return max
};