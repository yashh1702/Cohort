// console.log(this); //global -> window
// //----------------------------------------------------

// //function -> window
// function hello(){
//     console.log(this)
// }
// hello();
// //----------------------------------------------------

// //es5 function inside object -> object
// let obj = {
//     func: function () {
//         console.log(this); 
//     }
// }
// obj.func();
// //----------------------------------------------------

// //es5 function inside es5 function inside object -> window
// let obj1 = {
//     func: function () {
//         function hello(){
//             console.log(this)
//         }
//         hello();
//     }
// }
// obj1.func();
// //----------------------------------------------------

// //es6 function inside object -> window
// let obj2 = {
//     func: () => {
//         console.log(this); 
//     }
// }
// obj2.func()
// //----------------------------------------------------

// //es6 function inside es5 function inside object -> object
// let obj3 = {
//     func: function () {
//        let hello =  () => {
//             console.log(this)
//         }
//         hello();
//     }
// }
// obj3.func()


//“Objects do not create lexical scope in JavaScript, so arrow functions defined inside objects inherit this from the surrounding function or global scope.”


//Closure value ko yaad nahi rakhta,
//variable ki memory location ko yaad rakhta hai.