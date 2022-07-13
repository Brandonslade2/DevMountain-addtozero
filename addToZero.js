// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


let solution = "false"



for (let i = 0; i < array.length; i++) {
    for (let o = 0; o < array.length; o++) {
        if (i !== o) {
            if (array[i] + array[o] === 0) {
solution = "true"
            }
        }
    }
}



console.log(solution)


//THE ONLY THING THATS GETTING IN THE WAY IS THESE BRACKETS. IM TESTING AND FAILING ONLY TO FIND IN THE END OF THIS THAT IT HAS ALWAYS BEEN A BRACKET PROBLEM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




/*let j = 1

for (i = 0; i < array.length; i++) {
} if (array[i] + array[i + j] === 0) {
    solution = 'true'
} else {
        j += 1

}

console.log(solution)*/


/*let y = 1

for (i = 0; i < array.length; i++) {
} if (array[i] + array[i + y] != 0) {
    solution = 'false'
    y += 1
} if (array[i] + array[i + y] === 0) {
    break
}

console.log(solution)*/