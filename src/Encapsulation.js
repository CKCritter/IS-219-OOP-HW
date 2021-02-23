//The variable of the class should only be accessed through the getter and setter methods

class student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }
}
module.exports=student;