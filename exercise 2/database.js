

export default class Karyawan{
    constructor(name,position,age,placeOfBirth,salary,previousCompany){
        this.name = name;
        this.position = position;
        this.age=age;
        this.placeOfBirth=placeOfBirth;
        this.salary=salary;
        this.previousCompany=previousCompany;
    }
    getName(){
        return this.name;
    }
}