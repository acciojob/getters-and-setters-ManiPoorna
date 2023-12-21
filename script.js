//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(age){
		this._age = age;
	}
}

class Student extends Person {
	constructor(name){
		super(name);
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name){
		super(name);
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
