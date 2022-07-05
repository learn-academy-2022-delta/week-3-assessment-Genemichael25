// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// //ReferenceError: fibonacciSequence is not defined 

// // b) Create the function that makes the test pass.

//Pseudocode:
// Declare a function called fibonacciSequence
// Set a variable of fibArray for first two numbers in Fibonacci sequence [1,1]
// Use a for loop to give us an array with the number of elements we need
    // .push those values into array and return the array

const fibonacciSequence = (number) =>{
    const fibArray = [1,1];
    for(let i=2; i < number;i++){
        fibArray.push(fibArray[i-2]+fibArray[i-1])
    }
    return fibArray
}

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total

// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // a) Create a test with expect statements for each of the variables provided.

describe("onlyOdd", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    })
})

// // ReferenceError: onlyOdd is not defined

// // b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function of onlyOdd
// Set parameter as array
// Use .filter to get odd only values and only data that is a number
// .sort to go from least to greatest

const onlyOdd = (array) => {
    return array.filter(value => value % 2 === 1|| value % 2 === -1)
        .filter(value => typeof value === "number")
        .sort((a,b) => a-b)
    
}

//Test Suites: 1 passed, 1 total
//Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumUp", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
      const numbersToAdd1 = [2, 4, 45, 9]
      // Excpected output: [2, 6, 51, 60]
      const numbersToAdd2 = [0, 7, -8, 12]
      // Expected output: [0, 7, -1, 11]
      const numbersToAdd3 = []
      // Expected output: []
      expect(sumUp(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(sumUp(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(sumUp(numbersToAdd3)).toEqual([])
    })
})
        
//ReferenceError: sumUp is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function of sumUp
// Set a variable of sum equal to 0 as a starting point
// Iterate over the array using .map and adding the value at the current index to sum 
// Return the array 

const sumUp = (array) => {
    let sum = 0
    return array.map(value => sum += value)
}

//Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total