git remote add origin https://github.com/harshgupta1850/repo.git


import React, { Component } from 'react'

class Random extends Component{

    constructor(){
        super(props)
        //this.function =this.function.bind(this)
    }

    handleChange = (randevent) =>{

    }

    render(){
        
        <div>
            <button onClick={ () => }>

            </button>
        </div>
    }
}

<button onClick={ (name) => {

}.bind(this,name)}>
const random = (name,id) => {
    console.log(name,id)
}
random('harsh',1)

handleChange = () => {
    return {
        <select name="" id=""></select>
    }
}


<button onClick={handleClick()}>
    var onclicked= true
    {
        <select name="name" id="technology">.
            a.map( (value) =? {
                <option>{value}</option> 
            <option>React</option>
            <option>angular</option>
        </select>
    }


var



function a(x){
    return function b(y){
        return function c(z){
            return x*y*z        
        }
    }
}


var salary = "1000$";

(function () {
    var salary = "5000$";
    console.log("Original salary was " + salary);

    

    console.log("My New Salary " + this.salary);
})();



function a(x){
    return function b(y){
        return function c(z){
            return x*y*z
        }
    }
}

console.log(Object.keys(['a','b','c']))

var a= 5;
const a=10


var obj = { 
    method1 :  function() { console.log(this); } }

function person(first, last, age, gender, interest) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interest;
    this.welcome = () => {
        var name = '';
        name = `${this.name.first} ${this.name.last} is  ${this.age} year old.`
        var genderString = '';
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            genderString = ' He likes';
            name += genderString;
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'F' || this.gender === 'f') {
            genderString = ' She likes';
            name += genderString;
        } else {
            genderString = ' They likes';
            name += genderString;
        }
        var interestString = ''
        if (this.interests.length > 0) {
            this.interests.map((interest, index) => {
                if (index == this.interests.length - 1) {
                    interestString = ` ${interest}.`;
                    name += interestString;

                } else {
                    interestString = ` ${interest},`;
                    name += interestString;
                }
            })
        }
        alert(name)
    }
}


for(i=1;i<=5;i++){
    for(j=5;j<=i;j--){
        if(i==j){
            document.write('*')
        }else{
            document.write('')
        }
    }
    document.write('<br/>')
}
for (i = 0; i < 5; i++) {
    for(j=i; j<i;j++){
        console.log('*');
    }
    console.log('<br/>');
}

for (i=5; i>0; i--){
    for(j=1;j<=i;j++){
        document.write('*')
    }
    document.write('<br/>')
}

for (i=1; i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(`0${j} `)
    }
    document.write('<br/>')

}

function addExtra(price) {
    setTimeout(function () {
        return price + 1;
    }, 300)
}

console.log(addExtra(1));

function addExtra(price, callback) {
    if (price > 2) {
        callback(false, 'price cant excedd')
        return;
    }
    setTimeout(function () {
        callback(price + 1);
    })
}
addExtra(3, function (newPrice, error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(newPrice)
})


function addExtra(price) {
    return new Promise(function (resolve, reject) {
        console.log(price)
        if (price > 2) {
            reject("price exceed");
        }
        setTimeout(function () {
            resolve(price + 1)
        }, 300)
    })
}

addExtra(2).then(addExtra).then(function (newPrice) {
    console.log(newPrice)
}).catch(function (error) {
    console.log(error)
})

var price = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(200);
    }, 200)
})
var slowprice = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(101);
    }, 100)
})
var promises = [price, slowprice, 200]
Promise.allSettled(promises).then(function (resolvedpromises) {
    console.log(resolvedpromises)
})

fetch('http://dummy.restapiexample.com/api/v1/employee')
    .then(function (response) {
        response.json().then(function (json) {
            console.log(json)
        })
    }).catch(function (error) {
        console.log("invalid")
        console.log(error)
    })


function fac(number) {
    if (number === 1) {
        return 1
    }
    return number * fac(number - 1);
}

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register() {
        console.log(this.username)
    }
}

let bob = new User('bob', 'a', 'password')
bob.register()

class Member extends User {
    constructor(username, email, password, memberpackage) {
        super(username, email, password);
        this.package = memberpackage;
    }
    getpackage() {

    }
}


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
        document.write(`index:${i} element:${arr[i]} `)
    })
}



var x = 1;
function a() {
    var x = 2;
    debugger;
    console.log(this.x);
}
function b() {
    var x = 2
}
b()
var getName = function () {
    return this.name
}

const person = {
    name: 'harsh',
    prop: {
        name: 'bob',
        getName
    },
    getName
}
var nameofouter = person.getName()
console.log(nameofouter) // harsh

var nameofinner = person.prop.getName()
console.log(nameofinner) // bob

var nameofinside = person.prop.getName.bind(person)
console.log(nameofinside()) // harsh 


function Animal(noOfLegs) {
    this.legs = noOfLegs
}

Animal.prototype.behaviour = function (action) {
    console.log(action)   //sleep // bark //undefined
}
const animal = new Animal(4)
if ("behaviour" in animal) {
    animal.behaviour("sleep")
}
if (animal.behaviour) {
    animal.behaviour('bark')
}

if (animal.hasOwnProperty('behaviour')) {
    console.log('run')
}


console.log('first');
setTimeout(function () {
    console.log('second')
}, 0);
console.log('third');

setTimeout(function () {
    console.log(1);
}, 0)
Promise.resolve(2).then(console.log)

setTimeout(function () {
    console.log(3);
}, 0)
Promise.resolve(4).then(console.log)

setTimeout(function () {
    console.log(5);
}, 0)
Promise.resolve(6).then(console.log)

setTimeout(function () {
    console.log(7);
}, 0)
Promise.resolve(8).then(console.log)


function foo(i) {
    if (i === 5) {
        return;
    }
    for (let j = 0; j < 5; j++) {
        document.write(j);
        document.write('<br>')
        foo(i + 1)
    }
}
foo(0);









var promise = () => new Promise( (resolve,reject) => {
    throw 5;
    resolve(6);
})

promise()
.then(console.log)
.catch(console.log)
.then(()=>{ throw 7})
.then(()=>{ throw 8})
.catch((x)=>{
    console.log(x)
    return promise()
})
.catch(console.log)


fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));


  const {createStore} = require('redux');
const initialState = {
    age:21
}
const myReducer = (state=initialState,action) =>{
    const newState = {...state}
    if(action.type== 'ADD'){
        newState.age = action.payload;
    }
    if(action.type== 'SUB'){
        newState.age = action.payload;
    }
    return newState;
} 
const store =createStore(myReducer)
store.subscribe(() =>{
    console.log(store.getState())
})
store.dispatch({type:'ADD',payload:5});
store.dispatch({type:'SUB',payload:3});
