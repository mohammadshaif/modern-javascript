// function doubleit(num) {
//     return num *2
// }
// const result = doubleit(20)
// console.log(result);


const doubleit = function my(num){
    return num *2
}   
const result = doubleit(20)
console.log(result);

//es6

const doubleIt = num => num*2
const add = (x,y)=>x+y
const give =()=> 5;

const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff
    return result;
}
const result2= doMath(20,5)
console.log(result2);


const result = doubleIt(20)
console.log(result);

const result1 = add(20,30)
console.log(result1);