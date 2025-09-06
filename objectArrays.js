let person ={
    name:"madhu",
    age:21
}
console.log(person.name);
console.log(person["age"]);

const {name,age,college}=person;  //destructuring assigning
console.log(name)
console.log(age)
console.log(college)

let fruits = ["apple","banana","mango"];
console.log(fruits[0]);

let numbers=[1,2,3,4]
// array methods
let squares=numbers.map((num)=>num*num); //transform each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0); //filter values
console.log(evens);

let sum=numbers.reduce((present,num)=> present+num,0); //reduce 
console.log(sum);



// array of objects

 let arr=[{name:"madhu",marks:90},{name:"Babblu",marks:98},{name:"narasimha",marks:100}];
console.log(arr[0]);
for(arrays of arr){
    console.log(arrays)
}
for(let i=0;i<2;i++){
    for(let j=i+1;j<2;j++){

    
    if(arr[i].marks>arr[j].marks){
        console.log(arr[i].name+":"+arr[i].marks)
    }
    else{
        console.log(arr[j].name+":"+arr[j].marks)
    }
    
    }
}
//or
