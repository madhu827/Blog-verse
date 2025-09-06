function greet(){
    console.log("welcome to the devAstra")
}
greet()

function add(x,y){
    return x+y;
}
let result=add(12,28)
console.log(result)


const multiply=function (x,y){
    return x*y
}
console.log(multiply(5,3));

//arrow function
const square = (x)=>{  
    return x*x;
}
console.log(square(5))

const subtract =(x,y)=>{
    console.log(x,y);
    return x-y;
}
console.log(subtract(20,15));