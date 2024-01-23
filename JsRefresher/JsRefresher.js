// To print simple word 
// console.log("Hello world");
// alert("hello bahi");
// console.log("hello bahi");
// document.getElementById(my);
// window.alert("hello sir");
// console.clear();
// document.getElementsByTagName('p');
// let html = document.getElementById(my).innerHTML;
// document.getElementById("my").innerHTML = html;


// In html page used this tag 
/* <script>
</script> */

// js file link
//<script type="text/javascript" src="variable.js"></script>


// variables
// let name="ram";
// var a = "shree";
// const b=45;
// console.log(a,b,name);

// To data type 
// To number 
let n = 20;
let n1=16.00;
// To string 
let name1 ="Ram";
let name2= false;
// TO object 
let person={
    name:"ram",
    age:34,
    city:"pune"
};
// To array 
let number =[1,2,3,4,5,6,7,8,9,0];
// undfine 
let name4 ;
// To null
let name5 = null;
// console.log(person)
// console.log(n2)
console.log(n1)
console.log(name1);
console.log(name2);
console.log(name4);
// console.log(name5);

// string 
// simple string
// x = "Navnath"
// y = "Priya"
// z ="Deshmukh"
// console.log(x);
// // console.log(z + " "+ y + " " + x);//To concatination
// let s ='we welcome ${z}${y}${x}';
// // console.log(s);
// console.log((x[0]));//To access chracter by index 
// console.log((x.length));//To check length of string
// console.log((x.toUpperCase()));//uppercase 
// // console.log(x.toLowercase());//lowercase
// console.log(x.indexOf('n'))//indexof
// console.log(x.includes('a'))//includes to check 
// console.log(x.trim());//To remove white space at start and end
// console.log(x.slice(1,3)) //slice
// console.log(x.split()); //split

// typeof
let age = 20;
let address= {};
let names = "Ram";
let city =[];
let course;
console.log(typeof age);
console.log(typeof address);
console.log(typeof names);
console.log(typeof city);
console.log(typeof course);

// operator(op) 
// arithmetic op
// c=34,d=90;
// console.log(c + d);
// console.log(c - d);
// console.log(c * d);
// console.log(c / d);
// console.log(c % d);
// // increment and decrement op
// console.log(c++);
// console.log(++c);
// console.log(c--);
// console.log(--c);
// // logical op
// console.log((c > d)||(d<c));
// console.log((c > d)&&(d<c));
// console.log((c > d)==(d<c));
// console.log((c > d)===(d<c));
// console.log((c > d)!=(d<c));

// type coercion
// console.log((c + d));



// array -->
let x1=[99,100];
let x2=[1,2,3,4,5,6,7,8,9,0]
console.log(x2[9]);//Reading array
console.log(x2[0]=6);//writing array
console.log(x2)
console.log(x2.length);//length
console.log(x2.push(11)); //push
console.log(x2)
console.log(x2.pop()) //pop
console.log(x2)
console.log(x2.indexOf(8)) //indexof function
console.log(x2);
console.log(x2.concat(x1));//concat function
// console.log(x)

// loops or control flow
console.log("------loops----");

// for loop
console.log("for loop")
var l=0;
for(l=0;l<=10;l++)
{
    console.log(l);
}
// while loop
console.log("while loop")
var array = 4;
while(array<10){
    console.log(array);
    array++;
}

//  for.. in loop
var i;
var l={ f:"c",s:"java",t:"php"}
for(i in l)
{
    console.log(l[i]);
}

// do while loop 
var t=1;
do{
    console.log(t);
    t++;
}while(t<=10)

// Switch Case 
// var code="in";
// switch(code){
//     case "in":
//         console.log("India");
//         break;
//     case "US" :
//         console.log("United States");
//         break;
//     case "uk":
//         console.log("uk");
//         break;
//     default :
//         console.log("not match");    
// }


// // Ternary	Operators	(?:)
// var ages = 20;
// text = ages < 18 ?"kid":"adult";
// console.log(text);

// // condition
// var j=56;
// if(50<=j){
//     console.log("true");
// }
// else if(j==56)
// {
//     console.log("false");
// }
// else
// {
//     console.log("true")
// }

// function-->Calling a Function without argument

function ds()
    {
    console.log("a,b,c");
    }
ds();

// sum
function sum1(a,b,c)
    {
    console.log(a + b + c);
    }
sum1(2,3,4);
// hoisting---> js interpreter read function definition before executing code.
sum(2,3,4);
function sum(a,b,c)
    {
    console.log(a + b + c);
    }

// arrow function
//Callback Functions
// Function returning function
// Timer Functions

// objects
var Person = {
    name: "ram" ,
    age :30 ,
    address : "mumbai 10 ,india",
    phone:8888888888

   };
   console.log(person.name);
   console.log(person["age"]);

//Nested Objects
//this
// foreach()

// math library
console.log(Math.abs(-2));
console.log(Math.round(2.889));
console.log(Math.floor(2.88));
console.log(Math.ceil(2));
console.log(Math.pow(2));
console.log(Math.sqrt(4));
console.log(Math.max(2,7,89,8));
console.log(Math.min(2,7,89,8));
console.log(Math.random());
console.log(Math.trunc(99.9));

// for in loop
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {  console.log(`${property}: ${object[property]}`);
}
// alert
// alert("hey something");

console.log("Hello World"); // Prints "Hello World" to the console
console.error("This is an error"); // Prints "This is an error" to the console as an error
console.warn("This is a warning"); // Prints "This is a warning" to the console as a warning
//console.clear(); // Clears the console

// regular expresion
const regex = /(Navnath){2}/gi
const text = "Navnath is a very very nice awesome nice very boy"
console.log(text.replace(regex, "VERY"))

// console.time() and console.timeEnd()
console.time("Time taken");
let o1 = 5;
let y1 = 6;
let z = o1 + y1;
console.timeEnd("Time taken"); 

  