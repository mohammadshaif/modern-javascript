// function ar vitore jodi arekta  function thake oi
// function ke return ba vitore use kori tahole akta close 
//inveronment make kore and external reference rakhe

function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());