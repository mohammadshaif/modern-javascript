// slice splice join
//part  remove together
//vangga kata jora deya

const numS = [1,2,3,4,5,6,7,8];
// const part = numS.slice(2,5)    //2=suru 5= ses
// console.log(numS);
// console.log(part);
// const removed = numS.splice(2,5)        //2=suru 5=kotogula katbe 


//2=suru 5=kotogula katbe and next ta kisu inject korbe
const removed = numS.splice(2,5, 11,15)

const together = numS.join(" ")  //element jora lagano
console.log(removed);
console.log(numS);
console.log(together);

//practice
// const num = [1,2,3,4,5,6,7,8];

// const part = num.slice(2,6)
// const remove =num.splice(-1, -1, 11,15)
// const together =num.join(" ")
// console.log(together);