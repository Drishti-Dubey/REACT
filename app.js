// function sayHello()
// {
//     let you=prompt("Waht's on your mind ?");
//     console.log("Hello",you+"!");
// }
// sayHello();



// let varcontainingFunction = function()
// {
//     let varInFunction="I'm in a function";
//     console.log("hi! there",varInFunction);
// };
// varInFunction();




// PARAMETERS & ARGUMENTS
// **********************

// function tester(para1,para2)
// {
//     return para1+" "+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// let= tester(arg1,arg2);
// console.log(let);



// function addTwoNumbers(x,y)
// {
//     console.log(x+y);
// }
//  input1=parseInt(prompt("Enter the first number"));
//  input2=parseInt(prompt("Enter the second number"));
//  addTwoNumbers(input1,input2);

// let arr=[];
// arr.push("argument");


// DEFAULT ARGUMENTS
// function addTwoNumbers(x=2,y=3)
// {
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(2,4);
// addTwoNumbers(1,2,3,4);




// ARROW FUNCTION
// let doingArrowStuff= x => console.log(x);
// doingArrowStuff("Great!");


// var is funcytional scope
// // let/const are similar


// // let sayHi = () => console.log("hi");
// // const arr=["squirrel","alpaca","buddy"];
// // arr.forEach(e=> console.log(e));





// // SPREAD OPERATOR
// // ***************


// let spread=["so","much","fun"];
// let message=["JS","is",...spread,"and","very","powerful"];
// // WITHOUT ...--SHOWS SQUARE BRACKET
// // WITH...-- DOESN'T SHOW SQUARE BRACKETS
// console.log(message);


// function add(x,y,z,a)
// {
//  console.log(x+y+z+a);   
// }
// let arr=[5,9];
// let arr2=[6,7];
// add(...arr,...arr2);




// REST OPERATOR
// **************

// function demo(p1,...p2)
// {
//     console.log(p1,...p2);
// }
// demo("hi","there","Sir");




// RETURNING FUNCTION VALUES
// *************************

// function add(x,y)
// {
//     console.log(y);
//     console.log(x+y);
// }
// let result=add(4,5);
// console.log(result);

// let resultArr=[];
// for(let i=0;i<10;i++)
// {
//     let result=add(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);


// IN ARROW FORM
// let add=(x,y)=> x+y ;
// let result=add(12,15);
// console.log(result);


// let add=(x,y) =>
// {
//     console.log("ADDING....");
//     return x+y;
// }
// add(1,2);





// VARIABLE SCOPE IN FUNCTIONS



// local variable overrides global variable scope
// var is function scope 
// let and const block scope





// function testavailability()
// {
//     console.log(x);
// }
// testavailability("hi!");
// console.log(x);




// function test()
// {
//     let y="dd";
//     console.log("avail",y);
// }
// let z= test();
// console.log("outside",z);
// console.log("not avail",y);



// function doingStuff()
// {
//     if(true)
//     {
//         var x= "local";
//     }
//     console.log(x);
// }
// doingStuff();




// function doingStuff()
// {
//     if(true)
//     {
//         console.log(x);
//         var x= "local";
//     }
// }
// doingStuff();


// CONST SCOPE

// function doingStuff()
// {
//     if(true)
//     {
//         const x= "local";
//     }
//     console.log(x);
// }
// doingStuff();


// GLOBAL VARIABLES

// let globalvar="anywhere";
// console.log("out",globalvar);

// function createscope()
// {
//     console.log("global is accessible",globalvar);
// }
// createscope("some parameter");
// console.log("still avail",globalvar);



// *****NOTE*******
// to hide  a global variable create a local variable with the same name


//  let x="global";
//   function doingStuff()
//   {
//     let x="local";
//     console.log(x);
//   }
//   doingStuff();
//   console.log(x);



//   let x="global";
//   function doingStuff(x)
//   {
//     console.log(x);
//   }
//   doingStuff("para");

  // function confuseReader()
  // {
  //   x="GUESS MY SCOPE..";
  //   console.log("INSIDE THE FUNCTION",x);
  // }
  // confuseReader();
  // console.log("OUTSIDE OF FUNCTION...",x);




// IIFE

// (function()
// {
//   console.log("IIFE");
// })();



// RECURSIVE FUNCTIONS
// *******************

// function getRecursive(nr)
// {
//   console.log(nr);

//   if(nr>0)
//   {
//     getRecursive(--nr);
//   }
// }

// getRecursive(3);

// function logRecursive(nr)
// {
//   console.log("start",nr);
//   if(nr>0)
//   {
//     logRecursive(nr-1);
//   }
//   else{
//     console.log("done with recursion")
//   }
//   console.log("eneded function",nr);
// }

// logRecursive(3);

// RECURSION IS SLIGHTLY WORSE ITERATIONS




// NESTED FUNCTIONS

// function doOuterFunctionStuff(nr)
// {
//   console.log("OUTER");
//   doInnerFunction(nr);
// function doInnerFunction(x)
// {
//   console.log(x+7);
//   console.log("I can access",nr);
// }
// }
// doOuterFunctionStuff(2);


// ANONYMOUS FUNCTION


 let functionVariable = function()
 {
  console.log("NOT SO SECRET THOUGH");
 };
//  functionVariable();


// FUNCTION CALLBACKS
// (IF WE PASS A FUNCTION AS AN ARGUMENT TO ANOTHER FUNCTION THEN IT IS CALLED AS CALLBACK).

//  function doFlexibleStuff(executeStuff)
//  {
//   executeStuff();
//   console.log("INSIDE FLEXIBLE...")
//  }

//  doFlexibleStuff(functionVariable);



// SET TIMEOUT FUNCTION
let youGotthis=function ()
{
  console.log("keep coding");
};

// setTimeout(youGotthis,2000);
setInterval(youGotthis,2000);

// TO KILL THE PROCESS- CTRL+C