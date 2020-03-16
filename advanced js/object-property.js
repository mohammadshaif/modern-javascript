const student = 
    [
        {id:21, name: "manna"},
        {id:25, name: "josim"},
        {id:30, name: "eleas"},
        {id:35, name: "surjo"}
    ]
 
const names = student.map(s => s.name)
const bigger = student.filter(s => s.id >25)
console.log(bigger);