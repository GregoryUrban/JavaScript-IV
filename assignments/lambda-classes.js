// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }

    speak() {
        return (`Hello, my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo (subject) {
        return (`Today we are learning about ${this.subject}`)
    }
    grade (student, subject) {
        return (`${student.name} receives a perfect score on ${this.subject}`)
    }
}

class Student extends Person {
    constructor (attributes) {
    super(attributes) 
    this.previousBackground = attributes.previousBackground
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
    }

    listsSubjects (subject) {
        return (`${this.subject}`)
    }

    PRAssignment (subject) {
        return (`${this.name} has submitted a PR for ${this.subject}`)
    }

    sprintChallenge (subject) {
        return (`${this.name} has begun sprint challenge on ${this.subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor (attributes) {
    super(attributes) 
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
    }

    standUp (channel) {
        return (`${this.name} announces to ${this.channel}`)
    }

    debugsCode (student) {
        return (`${this.name} debugs ${this.student}'s code on ${this.subject}`)
    }
}


const greg = new ProjectManagers ({
    name: 'Greg',
    age: 44,
    location: 'Vermont',
    gender: 'Male',
    specialty: 'Grit',
    favLanguage: 'Javascript',
    catchPhrase: 'Ay Yo',
    gradClassName: 'webPT4',
    favInstructor: 'Cam'
    
})

console.log(greg)
console.log(greg.demo())
// console.log(greg.grade())
console.log(greg.standUp())
console.log(greg.debugsCode())