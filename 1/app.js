// let pass = prompt("Enter the password")
// while(pass !== "stop"){
//     console.log(pass)
//     pass = prompt("Enter the password")
// }


// let attempts = 0
// let sahiPassword = "yash"

// let userPassword = prompt("Password batao")
// attempts++;

// while(attempts<3 && userPassword !== sahiPassword){
//     userPassword = prompt("Password batao")
//     attempts++
// }

// if(attempts === 3 && userPassword !== sahiPassword){
//     console.log("Account Locked")
// }
// else{
//     console.log("Correct Password")
// }


// let yesCount = 0
// let word = prompt("Enter the word")

// while(word !== "stop"){
//     if(word == "yes"){
//         yesCount++;
//     }
//     word = prompt("Enter the word")
// }

// console.log(`Yes is entered ${yesCount} times`)


// let balance = 1000;
// let counter = 0;
// let validWithdrawal = false;

// while (balance > 0 && counter < 3) {
//     const withdrawn = prompt("Enter the amount");

//     if (withdrawn > balance) {
//         console.log("Insufficient balance");
//         break;
//     }

//     if (withdrawn === "0") {
//         counter++;
//         continue;
//     }

//     balance -= withdrawn;
//     validWithdrawal = true;
//     counter++;
// }

// console.log(
//     !validWithdrawal
//         ? "Invalid Transaction"
//         : `Balance : ${balance}`
// );

let balance = 1000;
let counter = 0;
let flag = false

while(balance > 0 && counter !== 3){
    let withdrawn = +prompt("Enter the amount")
    counter++;
    if(withdrawn <= balance) balance -= withdrawn
    else{
        flag = true
        break
    }
}

if(flag === true){
    console.log("Insufficient balance")
}

console.log(`Balance : ${balance}`)