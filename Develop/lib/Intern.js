// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Intern extends Employee{
    constructor(name, id, email, school){
    super(name,id,email)
    this.school = school;
}

getSchool(){
   
    return this.school

}

getRole(){
    return "Intern"



}
}


var obj = new Intern("suzie", 1, "yeah@yahoo.com");
console.log(obj)
obj.getSchool();
module.exports = Intern;