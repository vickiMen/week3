class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}



class Teacher extends Person {
    constructor(name, startYear, salary){
        super(name, startYear)
        this.salary = salary
        this.courses = {}
    }
    addCourse(courseName){
        if (this.courses.courseName == courseName) {
            this.courses.courseCounter++
        }
    }
    giveGrade(student, courseName, finalGrade){
        student.receiveGrade(courseName,finalGrade)
    }
}

