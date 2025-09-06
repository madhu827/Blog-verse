let marks =85;
if(marks>=90){
    console.log("A+ Grade");
}
else if(marks>=80){
    console.log("A Grade");
}
else if(marks>=70){
    console.log("B Grade");
}
else{
    console.log("fail");
}

let days=5;
switch(days){
    case 1:
           console.log("monday");
           break;
    case 2:
            console.log("tuesday");
            break;
    case 3:
            console.log("wednesday");
            break;
    case 4:
            console.log("thursday");
            break;
    case 5:
            console.log("friday");
            break;
    default:
            console.log("invalid");                                        
}


let n =10;
let i=1;
//whileloop
while(i<10){
    console.log(i);
    i++;
}
//forloop
for(let i= 1;i<n;i++){
    console.log(i);
}
//arrays of strings
let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//enhanced forloop
for(let color of colors){
    console.log(color);
}

let person={
    name:"madhu",
    age:21,
    college:"JNTU-GV"
}

for(let key in person){
    console.log(`${key}:${person[key]}`)
}

//continue and break
for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }
    else if(i===2){
        break;
    }
    console.log(i);
}