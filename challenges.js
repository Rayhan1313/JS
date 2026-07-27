//@ts-nocheck

// for(let number = 1; number<=100 ; number=number+1){
//     let val =number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz' : number %3 === 0? 'Fizz' : number % 5 === 0 ? 'Buzz' : number;
//     console.log(val);

// }

//  for(let number = 1; number<=100 ; number=number+1){
//     if(number % 3 === 0 && number % 5 === 0 ){
//         console.log(`${number} = FizzBuzz` );
//     }
//         else if(number %3 === 0)
//              { console.log(`${number} = Fizz`)}

//          else if(number % 5 === 0){
//             console.log(`${number} = Buzz`) ;
//          }
//         else{
//             continue;
//         }

// }

/** Budger Tracker App Challenge with loops */

/*
let name = prompt("Enter Your Name: ");
let income = parseFloat(prompt("Enter Your Monthly Income: "));
const taxRate = .1;
const savRate =.2;
let expences =0;

let qty = parseInt(prompt("How Many Expenses Do You Have ? eg. 1 or 2 or 3 etc. : "), 10);


if(isNaN(income) || isNaN(qty) || income <= 0 || qty < 0){
    console.log("Invalid input. Please enter valid numbers for income and quantity of expenses.");
}

else{

for(let i= 1; i<=qty; i++){
    let expencesAre = parseFloat(prompt((`Enter Your Expense ${i}: `)));
   
    if(isNaN(expencesAre) || expencesAre < 0){
        console.log(`Invalid input for expense ${i}. Please enter a valid number.`);
        expences =0; // Remove the invalid expense from total
    }
     expences += expencesAre;
}

//tax deduction
let taxDeduction =income * taxRate;

//Total income after tax deduction
let incomeAfterTax = income - (taxDeduction);

//Total Balance after expense deduction
let remainBalance =incomeAfterTax - expences ;

//Savings
let savings = remainBalance * savRate;

let status = savings >1000 ? 'Excellent' : savings > 500 ? 'Good' : savings > 100 ? 'Needs Improvement' : 'Critical';

let overSpending = expences > income ? 'Needs Improvement. Consider reducing expenses.' : 'Good. Your expenses are within your income.';


console.log(`Personal Budget Tracker`);
console.log(`User: ${name}`);

console.log(`Total Income: $${income}`)
console.log(`Total Expences: $${expences}`);
console.log(`Tax Deducted (10%): $${taxDeduction}`);
console.log(`Net Income After Tax: $${incomeAfterTax}`);
console.log(`Remaining Balance: $${remainBalance}`);
console.log(`Savings (20% of balance): $${savings}`);
console.log(`Financial Status: ${status}`);
console.log(`Spending Analysis: ${overSpending}`);


} 

*/

/*************Find the largest number   using 1D array and loop ******************/

/*
function highestScore(scores){
    let maxScore = scores[0];
    for(let i = 1 ; i< scores.length; i++){
        if(maxScore < scores[i]){
            maxScore = scores[i];
        }
    }
    return maxScore;
}


let scoreList = [400,5000,700,100, 200, 3000, 300, 1700, 50];
let highestValue  = highestScore(scoreList);
console.log(highestValue);

let sortAs = scoreList.sort(function(a,b){
    return a-b;
});
let sortDes=  sortAs.reverse();
console.log(sortDes[0]);

*/

/*************************Find the highestScorer with 2D array***************** */

// let playerLog = [
//     ["rayhan",100],
//     ['Rupa',101],
//     ['Tisha', 150],
//     ['Rubaiya', 200]
// ];
// console.log(playerLog);

// for(let i=0; i<4; i++){
//     for(let j=0; j<2; j++){
//         console.log(playerLog[i][j]);
//     }
// }

//find in 2D array who is the most score getter
/*
function highestScorer(data){
    // console.log(playerLog);
    let maxScorer = data[0][0];
    let maxScore  = data[0][1];
    for(let i =1; i< data.length; i++){
        if(maxScore< data[i][1]){
             maxScore  = data[i][1];
             maxScorer = data[i][0];
        }
    }
    return maxScorer;
}


let playerLog = [
    ["rayhan",100],
    ['Rupa',101],
    ['Tisha', 150],
    ['Rubaiya', 200],
    ['Xanon', 150],
    ['Rabbi', 250]
];


let scorer= highestScorer(playerLog);
console.log(scorer);

*/

// budget Tracker Challenge 7;

/*
console.clear();

const userName = "Rayhan Himel";
const income = 5000;

const taxRate = 10;
let savingsRate = 20; 


//tax amount calculation
const taxAmt = 5000 * .1;
let remainBal = income - taxAmt;

let expensesList =[];
let totalExpense = 0;

let expenseQty = Number(prompt(`How Many Expenses you have? `));

for(let i= 0; i < expenseQty; i++){
    expensesList[i] = parseFloat(prompt(`Enter expense number ${i+1}: `));
    console.log(expensesList[i]);
    totalExpense += expensesList[i];
}

// console.log(totalExpense);

const remainBalanceAfterExpense = remainBal - totalExpense;
 savingsRate = 20 /100;
const totalSavings = remainBalanceAfterExpense * savingsRate; 

let status = totalExpense > remainBal ?"Needs Improvement. Consider rwducing Expenses": "Average";



console.log(`User: ${userName}`);
console.log(`Total expenses: ${totalExpense}`);
console.log(`Tax Deducted (10%): ${taxAmt}`);
console.log(`Net Income After Tax: ${remainBal}`);
console.log(`Remain Balance: ${remainBalanceAfterExpense}`);
console.log(`Savings (${savingsRate}% of Balance): ${totalSavings}`);
console.log(status);

*/

// console.clear();

// const userName = prompt(`Enter your username: `);
// // const income = prompt(`Enter your monthly income`);

// const taxRate = 10;
// let savingsRate = 20;

// //tax amount calculation
// const taxAmt = 5000 * .1;
// let remainBal = income - taxAmt;

// // let  =[];
// let totalExpense = 0;

// let expenseQty = parseInt(prompt(`How Many Expenses you have? `));

// for(let i = 0; i< expenseQty; i++){
//   let expenses =[];
//   let expense = parseInt(prompt(`Enter expense: `));
//   if(isNaN(expense) || expense< 0){
//     expense = 0 ;
//     console.log(`Incorrect expense input`);
//   }
//   expenses.push(expense);
//   console.log(expense);

//   for(let index =0; index < expenses.length; index++){
//     totalExpense += expenses[index];
//   }
// }

// for(let i = 0; i< expenseQty; i++){
//     let expenses =[];
//     // let expense = parseFloat(prompt(`Enter expense ${i+1}: `));
//     // expenses.push(expense);

//     for(let index =0; index < expenses.length; index++){
//         totalExpense += expenses[index];
//     }
// }

// const remainBalanceAfterExpense = remainBal - totalExpense;
//  savingsRate = 20 /100;
// const totalSavings = remainBalanceAfterExpense * savingsRate;

// let status = totalExpense > remainBal ?"Needs Improvement. Consider rwducing Expenses": "Average";

/*
console.log(`User: ${userName}`);
console.log(`Total expenses: ${totalExpense}`);
console.log(`Tax Deducted (10%): ${taxAmt}`);
console.log(`Net Income After Tax: ${remainBal}`);
console.log(`Remain Balance: ${remainBalanceAfterExpense}`);
console.log(`Savings (${savingsRate}% of Balance): ${totalSavings}`);
console.log(status);

*/

/*************Guess game creation ************** */
//guess number from 1 to 5
// create random number from 1 to 5 ;
//print value -match korse naki na.
//kaj ta 5bar korte hobe
//koybar jitsi ar koybar harsi hisab kora lagbe..
/*

let winCount = 0;
let looseCount =0;

for(let i=0; i<5; i++){
let myPredictNumber = parseInt(prompt(`Enter a number between 1 to 6`));
// console.log(myPredictNumber);
let createRandomNumber = Math.floor(Math.random() * 6) + 1;

if(createRandomNumber == myPredictNumber){
    console.log(`Victory.`);
    winCount++;
}
else{
    console.log(`Looser`);
    looseCount++
}
}
document.write(`You have won ${winCount} times <br>`);
    document.write(`You have loose ${looseCount} times`);





function World(name, language, position){
    this.name =name ;
    this.language = language;
    this.position = position;

    this.Show =function(){
        console.log(this.name);
        console.log(this.language);
        console.log(this.position);
    }
}


const country1 = new World('Bangladesh', 'Bengali', 281);
const country2 = new World('India', 'Hindi', 7);

console.log(country1);
country1.Show();








*/

/******************    ***BUDGET APPS Phase 9***         ********/

// runBudgetApp();

//create function part ends
