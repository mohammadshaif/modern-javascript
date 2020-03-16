//proparty    //object //attribute valu

//element {object => proparty => valu/attribute thake }
//const student => id => 2

class Student {
    constructor(num1, num2){
        this.yourName = num1
        this.yourFname = num2

    }
        great(){
            return this.yourName+" "+this.yourFname
        }
    
}

const chato = new Student("rohim","jobbar")
console.log(chato.great());



class Student{
     constructor(sId,sName)
     {
         this.id = sId
         this.name = sName
         this.school = "Adomji school"
     }
}
const student1 = new Student(1,"Shuvo");
const student2 = new Student(2,"mahi");
console.log(student1.id, student2);