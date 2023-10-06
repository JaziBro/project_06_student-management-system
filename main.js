"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    enrollForCourses(course) {
        this.courses.push(course);
    }
}
class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.students = [];
        this.teachers = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.enrollForCourses(`AI`);
    }
    setTeacher(teacher) {
        this.teachers.push(teacher);
    }
}
const student1 = new Student("Jazil", 16, 2345);
const student2 = new Student(`Sulaiman`, 16, 6662);
student1.enrollForCourses("AI");
student2.enrollForCourses(`Blockchain`);
console.log(student1);
console.log(student2);
const teacher1 = new Teacher(`Zia`, 65, 50000);
const teacher2 = new Teacher(`Hamza`, 22, 30000);
teacher1.assignCourse(`Metaverse`);
teacher2.assignCourse(`AI`);
console.log(teacher1);
const course1 = new Course(`course1`, `AI`);
course1.addStudent(student1);
course1.addStudent(student2);
console.log(course1);
