const numbers = [12, 15, 19, 34, 49]

// const result = newNum = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const newE = element * element
//     newNum.push(newE)

//     }
//es6

// const result = numbers.map(function (elements) {
//     return elements * elements
    
// })

const result = numbers.map(x => x * x)
console.log(result);

//filter kono kisu selet korar jonno  $$ find element day ar filter array day

const bigger = numbers.filter(x => x>15)
const bigger1 = numbers.find(x => x>15)
console.log(bigger1);
console.log(bigger);
