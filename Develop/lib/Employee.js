// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
        
    }

    getId(){
        return this.id

    }

    getEmail(){
        return this.email

    }

    getRole(){
        return this.role

    }


}

var obj = new Employee("suzie", 1, "yeah@yahoo.com");
var obj2 = new Employee();
obj.getName();

module.exports = Employee;