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

const maebel = new Person ({
    name: 'Maebel',
    age: 3,
    location: 'Vermont',
    gender: 'Female'   
})

console.log(maebel);
console.log(maebel.speak());



class Instructor extends Person {
    constructor (attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo (subject) {
        return (`Today we are learning about ${this.favLanguage}`)
    }
    grade (student, subject) {
        return (`${maebel.name} receives a perfect score on ${this.favLanguage}`)
    }
}

const carolanne = new Instructor ({
    name: 'Carol Anne',
    age: 38,
    location: 'Vermont',
    gender: 'Female',
    specialty: 'Community',
    favLanguage: 'Javascript',
    catchPhrase: 'Im not really a catch phrase kinda gal'    
})

console.log(carolanne);
console.log(carolanne.demo());
console.log(carolanne.grade())



class Student extends Person {
    constructor (attributes) {
        super(attributes) 
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }

    listsSubjects (favSubjects) {
        return ([`${this.favSubjects}`])
    }

    PRAssignment (subject) {
        return (`${this.name} has submitted a PR for ${this.favSubjects}`)
    }

    sprintChallenge (subject) {
        return (`${this.name} has begun sprint challenge on ${this.favSubjects}`)
    }
}

const benson = new Student ({
    name: 'Benson',
    age: 5,
    location: 'Vermont',
    gender: 'Male',
    previousBackground: 'Math',
    favLanguage: 'CSS',
    catchPhrase: 'Lets go!',
    className: 'webPT4',
    favSubjects: ['Calculus', ' Algebra']
    
})

console.log(benson);
console.log(benson.listsSubjects());
console.log(benson.PRAssignment())
console.log(benson.sprintChallenge())


class ProjectManagers extends Instructor {
    constructor (attributes) {
    super(attributes) 
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
    }

    standUp (channel) {
        return (`${this.name} announces to channel, @channel standby times!`)
    }

    debugsCode (student) {
        return (`${this.name} debugs ${benson.name}'s code on ${this.favLanguage}`)
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

console.log(greg);
console.log(greg.demo());
// console.log(greg.grade())
console.log(greg.standUp())
console.log(greg.debugsCode())