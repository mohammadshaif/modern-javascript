class Father{
    constructor(){
        this.fatherName = "abul";
    }
}


class Child extends Father{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName
    }
}
const baby = new Child("josim")
const baby2 = new Child("miraj")
console.log(baby.getFullName());
console.log(baby2.getFullName());