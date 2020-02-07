function at(x){
    return function a(y){
        return x+y
    }
}
at(4)(2)




function a(){
    for(var i=0;i<9;i++){
        setTimeout( () => {
            console.log(i)
        });   
    }
}

const b = a;

for(var i )


for(var i=0;i<9;i++){
   console.log()  
}

a()
const b= ()=>{
        let i =10; 
        var j =10; 
        console.log(i,j);
}
var a;
console.log(a)
a= 7;

function a()
function b(){
    document.write('hi')
}

function a(){
    var url='htt',

}
fetch('')
.then()
.catch()

const obj={
    a:10,
    b:{
        b1:'hello'
    },
    c:[{
        c1:10
    }]

}

const {a,b:{b1}} = obj


[1,2,3,4] => [1,3,2,4]

const b=a.filter( value => value%2==0)
const c=a.filter( value => value%2!==0)
var d= [...c,..b]

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then( (response) => { 
   //do something awesome that makes the world a better place
   console.log(response)
});