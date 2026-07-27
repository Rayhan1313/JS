//  document.write("Hello World");
// console.log("Hello World");
/*
let name = "Rayhan";
let income = 5000;
let expences = 2000;
console.log(`
Budget Summary:    
My name is ${name} 
My income is ${income},expenses are ${expences}`); 
console.log(income , expences);
*/
// console.log(expences);


//Number Method nia kaj korbo aittate;

// let a = 70 ;
// a = toString(a);
// console.log(typeof(a));
// let b = a.toString();
// console.log(typeof(b));
// b= 13.25;

// a = parseInt(a);
// console.log(typeof(a));
//  b= parseFloat(b);
// console.log(typeof(b));
/*

let a= 10.532534;
a= a.toFixed(1);
// a = a.toPrecision(3);
// a= Number(a)
console.log(a);
console.log(typeof(a));

b= 20.5;
b= String(b);
console.log(typeof(b));


*/

/**************Concatenation *************/

// let userName = "Rayhan";
// let greeting = "Welcome to JS World";
// let message = greeting + " " + userName;
// document.write(message);
// console.log(message);


/* (**************************************String Method **************************************)
//string liabrary function
let fName = "Rayhan";
let lName = "Himel";
let fullNAme = fName + " " + lName;
console.log(fullNAme);

fName = fName.length;
console.log(fName);
lName = lName.charAt(4);
console.log(lName);

fullNAme = fullNAme.toUpperCase();
console.log(fullNAme);

fullNAme = fullNAme.toLowerCase();
console.log(fullNAme);

fullNAme =fullNAme.slice(2,6);
console.log(fullNAme); 
*/

/* ************************** string Method test exam ******************************* */
/*
let firstName = prompt("Enter Your First Name: ");
let lastName =prompt("Enter Your Last Name: ");
let fullName = firstName + "  " + lastName;
document.write("<br>" + fullName);
document.write("<br>" + fullName.length + "<br>") ;
document.write(fullName.toUpperCase()+ "<br>");
document.write(fullName.charAt(1));
*/


/* Budget Challenge Task
let name = "Rayhan Himel";
let income = 5000;
let expences = 2000;
// console.log(`
// My name is ${name} 
// My income is ${income},expenses are ${expences}`); 
// console.log(income , expences);

console.log('Personal Budget Tracker');
console.log('User: '+ name.toUpperCase());
console.log('Total Income: $'+ income);
console.log('Toal Expenses: $' +expences);

*/



//arithmetic operator + , -, *, /, % , ++, --

// let a =20;
// let b =3;
// let ab = (a + b);
// ba = a-b;
// a_b = a * b;
//  b_a = (a / b).toFixed(2);
// a_b_mod = a % b;
// console.log(ab,ba, a_b, b_a, a_b_mod);
// console.log(typeof(a_b));


// let b2 = b **  2;
// console.log(b2);

// //

// hg =a += b ;
// gh = a -=b;



/**************************TASK 3 *************************** */


/*
let firstNum = prompt("Enter First Number: ");
let secondNum = prompt("Enter Second Number: ");
firstNum = parseInt(firstNum, 10);
secondNum = parseInt(secondNum, 10);

let sum = firstNum + secondNum;
let sub = firstNum - secondNum;
let mul = firstNum * secondNum;
let div = (firstNum / secondNum).toFixed(2);
let mod = firstNum % secondNum;

document.write(firstNum + " + " + secondNum + " = " + sum + "<br>");
document.write(firstNum + " - " + secondNum + " = " + sub + "</br>");
document.write(firstNum + " * " + secondNum + " = " + mul + "</br>");
document.write(firstNum + " / " + secondNum + " = " + div + "</br>" );
document.write(firstNum + " % " + secondNum + " = " + mod + "</br>");


*/


// Task 4

// const userName = "Rayhan Himel";
// const income = 5000;
// const expense = 2300;
// const taxRate = 10;
// const savingsRate = 20;

// let taxamount = (income * taxRate) / 100;
// let netIncomeAfterTax = income - taxamount ; 
// let remainBalance = netIncomeAfterTax - expense;
// let savings = (remainBalance * savingsRate ) / 100 ;

// console.log("Personal Budget Tracker");
// console.log("User: " + userName.toUpperCase());
// console.log("Total Income: $" + income);
// console.log("Total Expenses: $" + expense);
// console.log("Tax Deduction (" + taxRate + "%): $"+ taxamount );
// console.log("Net Income After Tax: $"+ netIncomeAfterTax);
// console.log("Remaining Balance After Expenses: $"+ remainBalance);
// console.log("Savings (" + savingsRate + "% of balance): $" + savings);





/***template literal***/


/*
console.log("Personal Budget Tracker");
console.log(`User: ${userName.toUpperCase()}`);
console.log(`Total Income: $${income}`);
console.log(`Total Expenses: $${expense}`);
console.log(`Tax Deduction (${taxRate}%): $${taxamount}`);
console.log(`Net Income After Tax: $${netIncomeAfterTax}`);
console.log(`Remaining Balance After Expenses: $${remainBalance}`);
console.log(`Savings (${savingsRate}% of balance): $${savings}`);

*/


// Relational Operator > , < , >= , <= , == , === , != , !==
// Logical Operator && , || , !



/* If else test */


// let number = prompt("Enter a number: ");
// number = parseFloat(number, 10);
// if(number < 101 && number > 79)
//     console.log("A+");
// else if(number < 80 && number > 69)
//     console.log("A");
// else if(number < 70 && number > 59)
//     console.log("A-");
// else if(number < 60 && number > 49)
//     console.log("B");
// else if(number < 50 && number > 39)
//     console.log("C");
// else if(number < 40 && number > 32)
//     console.log("D");
// else if(number < 33 && number >=0)
//     console.log("F");
// else
//     console.log("Invalid Number");




// let marks = prompt("Enter Your Marks: ");


// if(marks <0 || marks >100){
//     console.log("Invalid Marks");
// }
// else if(marks >=80 && marks <=100)
//     console.log('A+');
// else if(marks >=80 && marks <=70) 
//     console.log('A');
// else if(marks >=70 && marks <=60)
//     console.log('A-');
// else if(marks >=60 && marks <=50)
//     console.log('B');
// else if(marks >=50 && marks <=40)
//     console.log('C');
// else if(marks >=40 && marks <=33)
//     console.log('D');
// else
//     console.log('F');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       



//**************bigger Number***************

// const number1 = prompt("Enter a number: ");
// const number2 = prompt("Enter another number: ");
// const number3 = prompt("Enter another number: ");

// if(number1 > number2 && number1 >number3)
//     console.log(`biggest number is  number1 ${number1}`);
// else if(number2 > number1 && number2> number3)
//     console.log(`bigest number is  number2 ${number2}`);
// else
//     console.log(`biggest number is ${number3}`);




/**********Vowel or Consonant***************/

// let letter = prompt("Enter a letter: ");
// letter =letter.toLowerCase();

// if(letter =='a'|| letter == 'e' || letter == "i" || letter == "o" || letter == "u")
//     console.log(`${letter} is a vowel`);
// else
//     console.log(`${letter} is a consonant`);
/*

let userName = "Rayhan Himel";
let income = 5000;
let expense = 5100;
let taxRate = 10;
let savingsRate = 20; 

//tax amount calculation
let taxAmount = (income * taxRate) /100 ;

//net income after tax calculation
let netIncomeAfterTax = income - taxAmount;

//remaining balance after expense calculation
let remainBalance  = netIncomeAfterTax - expense;

//savings calculation
let savings = (remainBalance * savingsRate) / 100 ;




let status = '';

if(savings >= 1000)
    status=`Excellent`;
else if(savings >= 500)
    status=`Good`;
else if(savings >=100)
    status=`Needs Improvement`;
else 
    status=`Critical`;


let overSpending = '';
if(expense > income){
    overSpending = `Warning: You are spending more than your income!`;
}

console.log("Personal Budget Tracker");
console.log(`User: ${userName}`);
console.log(`Total Income: $${income}`);
console.log(`Total Expenses: $${expense}`);
console.log(`Tax Deduction (${taxRate}%): $${taxAmount}`);
console.log(`Net Income After Tax: $${netIncomeAfterTax}`);
console.log(`Savings (${savingsRate}% of balance): $${savings}`);
console.log(`Savings Status: ${status}`);
console.log(`${overSpending}`);

*/


// const userName = "Rayhan Himel";
// const income = 5000;

// const taxRate = 10;
// const savingsRate = 20; 


// //tax amount calculation
// const taxAmt = 5000 * .1;
// //remaining balance after tax calculation
// const remainBalanceAfterTax = income - taxAmt ;

// const houseRent =2000;
// const foodExpense = 1500;
// const vehicleExpense =750;
// const electricBill = 300;
// //total expense calculation
// const totalExpense = houseRent + foodExpense + vehicleExpense + electricBill;
// //remaining balance after expense calculation
// const remainBalanceAfterExpense = remainBalanceAfterTax - totalExpense;
// //savings rate
// const saveRate = remainBalanceAfterExpense * .2 ;
// //savings calculation
// const savings = remainBalanceAfterExpense - saveRate;


// let status ='';
// if(savings >=1000)
//     status = `Excellent`;
// else if(savings >=500)
//     status = `Good`;
// else if(savings >=100)
//     status = `Needs Improvement`;
// else 
//     status = `Critical`;

// const overSpending = '';
// if(totalExpense > remainBalanceAfterTax){
//     overSpending = `Warning: You are spending more than your income!`;
// }





// console.log("Personal Budget Tracker");
// console.log(`User: ${userName}`);
// console.log(`Total Income: $${income}`);
// console.log(`Tax Deduction (${taxRate}%): $${taxAmt}`);
// console.log(`Remaining Balance After Tax: $${remainBalanceAfterTax}`);
// console.log(`Total Expenses: $${totalExpense}`);
// console.log(`Remaining Balance After Expenses: $${remainBalanceAfterExpense}`);
// console.log(`Savings (${savingsRate}% of balance): $${savings}`);
// console.log(    `Savings Status: ${status}`);
// console.log(`${overSpending}`);


