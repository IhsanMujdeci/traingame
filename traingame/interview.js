/**
 * for numbers starting from 1 to 150,
 *
 * if the number if times of 3, print red - go to next iteration
 *
 * if the number if times of 5, print green - got to next iteration
 *
 * if the number if times of both 3 & 5, print blue - go to next iteratio
 */

function printColor() {

    for (let i = 1; i <= 150; i++) {
        console.log(i);
        if (i % 15 == 0) {
            console.log("blue");
            continue;
        }
        if (i % 3 == 0) {
            console.log("red");
            continue;
        }
        if (i % 5 == 0) {
            console.log("green");
            continue;
        }
    }
}

printColor();
