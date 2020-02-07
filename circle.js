function go(){
    let div = document.createElement('div')
    div.style.height='50px';
    div.style.width='100px';
    div.style.left='100px';
    div.style.top='200px';
    div.style.background='blue';
    document.body.append(div);
}

function x(){
    document.getElementById("parent-list").addEventListener("click", function(e) {
        // e.target is the clicked element!
        // If it was a list item
        if(e.target && e.target.nodeName == "LI") {
            // List item found!  Output the ID!
            console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        }
    });
}


function x() {
    for(let i=0;i<5; i++){
        console.log(i)
    }
    console.log(i)
}
x()

function x() {
    for(var i=0;i<5; i++){
        console.log(i)
    }
    console.log(i)
}
x()


var a=6
var a=5
let b=6; let b=7

var a= 5;
var b =6;
if(b>5){
    var c=10;
    let a=1;
}
console.log(c)



function foo1(){
    return {bar:'hello'}
}