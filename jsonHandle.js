const student={
    name:'Jhon',
    age:23,
    isActive:true
}

// convert this object into string to stored in local stoarage

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)
localStorage.setItem('student',studentObjToString)
localStorage.getItem('student')
const toJson=JSON.parse(studentObjToString)
console.log(toJson)

const a={
    a:'1',
    b:'2',
    c:{
        d:'2',
        e:'3'
    }
}
const b=a;

