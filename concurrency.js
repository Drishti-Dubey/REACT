// concurrency----> multiple tasks at the same time


// synchronous---> one after the other
// {BLOCKING CODE}




// CALLBACKS

// FUNCTION PASSED AS AN ARGUMENT

// it is only called when the initial functionh has finished

// function doSomething(callback)
// {
//     callback();
// }

// function sayHi()
// {
//     console.log("HI");
// }

// doSomething(sayHi);


// function judge(grade)
// {
// switch(true)
// {
//     case grade=="A":
//         console.log("You got a grade",grade,":amazing");
//         break;

//         case grade=="B":
//             console.log("You got a grade",grade,":amazing");
//             break;
//             case grade=="C":
//                 console.log("You got a grade",grade,":amazing");
//                 break;

//                 case grade=="D":
//                     console.log("You got a grade",grade,":amazing");
//                     break;
            
// default:
//     console.log("an",grade,"what?!");
// }
// }


// function get(score,callback)
// {
//     let grade;
//     switch(true)
//     {
//         case score>=90:
//             grade="A";
//             break;

//             case score>=80:
//             grade="B";
//             break;

//             case score>=70:
//             grade="C";
//             break;


//             case score>=60:
//             grade="D";
//             break;

//             default:
//                 console.log("invalid");
//     }
//     callback(grade);
// }
// get(85,judge);


// CALLBACK HELL
// CHRISTMAS TREE PROBLEM




// PROMISES



// handles tw parameters {call backs}
// they are resolve and reject
// organizes sequence of code



// let promise=new Promise(function(resolve,reject)
// {
// let x=20;
// if(x>10)
// {
//     resolve(x);
// }
// else{
//     reject("Too low");
// }
// });

// promise.then(
//     function(value)
//     {
//         console.log("Success:",value);
//     },
//     function(error)
//     {
//         console.log(":Error",error);
//     }
// );


// USING ARROW FUNCTON

// const promise= new Promise((resolve,reject)=> {
// resolve("succes");})
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value =>
// {
//     console.log(value);
//     return "chain";
// })
// .then(value =>
// {
//     console.log(value);
//     return "promises";
// })
// .then(value =>
// {
//     console.log(value);
// })
// .catch(value =>
// {
// console.log(value);
// })




// ASYNC{ASYNCHRONOUS ---> RETURNS PROMISES}  & AWAIT

// function say(x)
// {
//     return new Promise(resolve =>
//     {
//         setTimeout(()=>
//         {
//             resolve("something"+x);
//         },2000);
//     });
// }

// async function talk(x)
// {
//     const words= await say(x);
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(8);

