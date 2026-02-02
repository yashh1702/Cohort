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


//call -> fnc chalata hai and this ki value set karta hai
//apply -> wahi karta hai jo call karta hai and arguments mein pahli value this ki and doosri value array hoi hai
//bind -> wahi karta hai jo call karta hai and aapko naya fnc deta hai

// “Class ke methods har object ke andar copy nahi hote,
// wo prototype me ek hi jagah store hote hain,
// aur saare objects wahi same method use karte hain.”
// mtlb
// “Data = object ke paas,
// Method = prototype ke paas.”

//callback
// function abcd(fn){
//    return fn()
// }
// let val = abcd(function(){
//     return "hey"
// })
// console.log(val)

// function abcd(fn1){
//     fn1(function(){
//         return "hey"
//     })
// }

// let val = abcd(function(fn2){
//     fn2()
// })
// console.log(val)

// function abcd(address,cb){
//     let val = address
//     cb(val)
// }

// abcd('he',function(details){
//     console.log(details)
// })


// function instagramSeDataLaao(username,cb){
//     setTimeout(() => {
//        cb({uid:11,username:username}) 
//     }, 3000);
// }

// function metaPeJaaoDataLaao(uid,cb){
//     setTimeout(() => {
//         cb(["img1","img2"])
//     }, 4000);
// }

// instagramSeDataLaao("yash",function(data){
//     metaPeJaaoDataLaao(data.uid,function(images){
//         console.log(data.uid,images)
//     })
// })\

// document.addEventListener("mousedown", function (e) {
//     if (e.button === 2) {
//         console.log("Right click");
//     }
// });

const box = document.getElementById("box");

let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (e) => {
  isDragging = true;

  // mouse aur box ke beech ka gap
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;

  box.style.cursor = "grabbing";
});

// document.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;

//   box.style.left = e.clientX - offsetX + "px";
//   box.style.top  = e.clientY - offsetY + "px";
// });

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // screen / body size
  const maxX = window.innerWidth - box.offsetWidth;
  const maxY = window.innerHeight - box.offsetHeight;

  // boundaries apply
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  box.style.left = x + "px";
  box.style.top  = y + "px";
});


document.addEventListener("mouseup", () => {
  isDragging = false;
  box.style.cursor = "grab";
});

