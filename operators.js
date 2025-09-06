//Arithmetic operators
let x=10,y=12;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);// exponential form


//Assignment operators
let z=5;
z+=3;
console.log(z);
z*=3;
console.log(z);
z*=2;
console.log(z);
z/=2;
console.log(z);

//comparision operators

let a=10,b="10";

console.log(a==b);// only value
console.log(a!=b);
console.log(a===b);// value and type also checking
console.log(a!==b);
console.log(a<=b);
console.log(a>=b);
console.log(a<b);
console.log(a>b);

//logical operators

let age = 20;
console.log(age>=20 &&  age<=40);
console.log(age<20 || age >20)
console.log(!(age<18));

//String operators
 
let firstName="madhu";
let lastName="kumar";
let fullName=firstName+" "+lastName;
console.log(fullName);
let correctName=`Hello ${firstName} ${lastName},welcome to the dev astra`;//template literals
console.log(correctName);

//Ternary operator

let myAge= 20;
if(myAge>=18){
    console.log("eligible to vote");

}
else{
    console.log("you connot vote");
}

let result=myAge>=18 ? "eligigble to vote ":"you are not eligible";
console.log(result);

//Increment  and decrement operators
let count =5;
console.log(count++);
console.log(count);
console.log(++count);

// typeof operators
console.log(typeof count);
console.log(typeof "madhu");
console.log(typeof 18);
