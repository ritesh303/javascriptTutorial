//object literals

//object={}

const students={
    name:'ritesh',
    age:20,
    skills:['js','react'],
    runCode:function(){
        return`${this.name} having ${this.age} is perfect in ${this.skills[0]}`
    }
}

console.log(students.runCode())