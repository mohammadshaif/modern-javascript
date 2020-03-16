const ages = [12,15,16,17]
const ages2 = [21,23,25,29]
const ages3 = [31,35,36,39]

const allAges = ages.concat(ages2).concat([5]).concat(ages3)
//es6
const allAges2 = [...ages,...ages2,5,...ages3]
console.log(allAges);
console.log(allAges2);


const a = 350;
const b =450;
const c = 600;
const d = [350,450,600]
const max= Math.max(a,b,c)
console.log(max);

//es6

const taka = [350,450,600];
const max2= Math.max(...taka)
console.log(max2);