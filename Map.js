//MAPS STORES KEY-VALUE PAIR 


// HERE FRUITS IS AN OBJECT

// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

// console.log(fruits);



// INSERTION

// const fruits = new Map();

// fruits.set("apples",500);
// console.log(fruits);

// SET HERE REINTIALIZES MEMBERS

// fruits.get("apples");


// RETURNS TYPE 
// console.log(typeof fruits);


// SIZE METHOD
// console.log(fruits.size);

// DELETE
// console.log(fruits.delete("apples"));
// console.log(fruits.size);


// CLEAR METHOD
// fruits.clear();


// MEMBERSHIP METHOD
// console.log(fruits.has("apples"));



// CALL BACK(passing function as an argument)

// let text="";
// fruits.forEach(function(value,key)
// {
//     text=text+key+"="+value+" ";
// })

// console.log(text);


// ENTRIES{gives commas}

//  let text="";
// for(const x of fruits.entries())
// {
//     text=text+x+" ";
// }
// console.log(text);




// FOR KEYS

//  let text="";
//  for(const x of fruits.keys())
//  {
//     text=text+x+" ";
//  }
//  console.log(text);


//  VALUES

// let text1="";
// for(const x of fruits.values())
// {
//    text1=text1+x+" ";
// }
// console.log(text1);



// sum of all values

// let t=0;
// for(const x of fruits.values())
// {
//     t=t+x;
// }
// console.log(t);


// const apples={name:"apple"};
//  const fruit = new Map();
//  fruit.set(apples,500);
// console.log( fruit.get(apples));


// GROUP BY

// const fruits=[
//     {name:"a",q:300},
//     {name:"b",q:500},
//     {name:"c",q:200},
//     {name:"d",q:150},
// ];

// function myCallback({q})
// // DESTRUCTURING OR FOCUSING ON A  PARTICULAR ENTITY
// {
//     return q>200?"ok":"low";
// }

// const result=Map.groupBy(fruits,myCallback);
// console.log(result);




// DESTRUCTURING
// UNPACK OBJECT PROPERTIES INTO VARIABLES


// let {fname,lname}=person;

// const person=
// {
//     fname:"Drishti",
//     lname:"Dubey",
//     age:50
// };

// let{fname,lname}=person;
// console.log(person);

// DESTRUCTURING IS NOT DESTRUCTIVE
// IT DOESN'T CHANGE THE ORIGINAL OBJECT


// const person=
// {
//     fname:"Drishti",
//     lname:"Dubey",
//     age:50
// };

// let{fname,lname,country="US"}=person;
// console.log(person);


// ALIAS NAME


// const person=
// {
//     fname:"Drishti",
//     lname:"Dubey",
//     age:50
// };

// let{lname:name}=person;
// console.log(person);





// STRING DESTRUCTURING
 
// let name="GURUKULTHESCHOOLS";

// let[a1,a2,a3,a4,a5]=name;
// // HERE A1,A2,A3 ETC are characters of the string "name"



// const fruits=["bananna","Oranges","apples","mangoes"];

// // let[fruit1,fruit2]=fruits;

// // let[fruit1,,,,fruit2]=fruits;

// let{[0]:fruit1,[1]:fruit2}=fruits;

// console.log(fruits);


// // REST

// const nums=[10,20,30,40,50,60,70];
// const[a,b,...rest]=nums;



// // SWAPPING USING DESTRUCTURING
// let fname="John";
// let lname="DOe";

// // destructuring
// [fname,lname]=[lname,fname];




// EXPONENTIAL OPERATOR(**)


//X DOESN'T MODIFIES
// let x=5;
// let z=Math.pow(x,2);
// // let z=x**2;

// console.log(z);

// // X MODIFIES

// x**=2;
// console.log(x);



// ARRAY.INCLUDES

// const fruits=["banana","Oranges","apples","mangoes"];
// console.log(fruits.includes("mangoes"));

// // CHANGES INDEXING
// console.log(fruits.includes("banana",3));

// IT IS CASE SENSITIVE




// TRAILING COMMA{VALID FUNCTION AND OBJECTS ONLY}

// DANGLING OR TERMINAL COMMA


// const arr=[
//     "1","2","3",
// ];

// // IF MORE THAN ONE COMMA THEN UNDEFINED EROOR IS THROWN

// const sparseArray=[1,,,4,5,,];
// // length 6

// const arr1=[,];
// length 1


// elements not written==> undefined

// const person=
// {
// fname:"John",,age:30,
// }


//SHOWS SYNTAX ERROR


