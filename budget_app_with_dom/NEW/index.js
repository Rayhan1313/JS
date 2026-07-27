const name = document.querySelector("#name");
const income = document.querySelector("#income");
let expensess = document.querySelector("#expenses");
let startBudgeting = document.querySelector("#startBudget");
let expenseDiv = document.querySelector("#expenseDiv");
let calculateBudgets = document.querySelector("#calculateBudget");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");

startBudgeting.addEventListener("click", expenseEntry);
calculateBudgets.addEventListener("click", runBudgetApp);
reset.addEventListener("click", resetAll);
name.addEventListener("input", validation);
income.addEventListener("input", validation);
expensess.addEventListener("input", validation);

startBudgeting.disabled = true;

function validation() {
  const nameValid = name.value.trim().length > 0;
  const incomeValid = income.value > 0 || income.value !== "";
  const expensessValid = expensess.value > 0 || expensess.value !== "";

  startBudgeting.disabled = !(nameValid && incomeValid && expensessValid);
}

//create function resetAll
function resetAll() {
  clearLocalStorage();
}

//create function part start
function storeBudgetToLocal(userBudget) {
  localStorage.setItem("userBudget", JSON.stringify(userBudget));
}

function getBudgetFromLocal() {
  const savedBudget = localStorage.getItem("userBudget");
  return savedBudget ? JSON.parse(localStorage.getItem("userBudget")) : null;
}

function clearLocalStorage() {
  localStorage.clear();
  result.innerHTML = ``;
}

// function userInput(inputMessage, isNumber = false) {
//   const uInput = prompt(inputMessage);
//   return isNumber ? parseFloat(uInput) : uInput;
// }

function totalTax(userBudget) {
  let tTax = userBudget.income * userBudget.taxRate;
  return tTax;
}

function remainBalance(userBudget) {
  let remainBal = userBudget.income - userBudget.taxAmt;
  return remainBal;
}

function expenseEntry() {
  //   if (isNaN(expenses) || expenses < 0) {
  //     alert(`Incorrect expense input`);
  //   }
  //   console.log(expensess.value);
  //   let expensess = [];
  for (let i = 1; i <= expensess.value; i++) {
    let newLabel = document.createElement("label");
    newLabel.textElement = `Enter expense ${i}: `;
    let newInput = document.createElement("input");
    newInput.classList.add("expenseList");

    expenseDiv.appendChild(newLabel);
    expenseDiv.appendChild(newInput);
    expenseDiv.appendChild(document.createElement("br"));
  }

  calculateBudgets.style.display = "inline-block";
  reset.style.display = "inline-block";
}

function runBudgetApp() {
  let userBudget = {
    userName: name.value,
    income: parseFloat(income.value),
    taxRate: 0.1,
    savingsRate: 20 / 100,
    taxAmt: 0,
    remainBal: 0,
    expenseQty: parseInt(expensess.value),
    expenses: [],
    totalExpense: 0,
    remainBalanceAfterExpense: 0,
    totalSavings: 0,
    status: "",
  };

  const classTa = document.getElementsByClassName("expenseList");
  for (let index = 0; index < classTa.length; index++) {
    let expense = parseInt(classTa[index].value);
    userBudget.expenses.push(expense);
  }

  calculateBudget(userBudget);
  output(userBudget);

  //expense Breakdown
  // for (let index = 0; index < userBudget.expenses.length; index++) {
  //   console.log(`Expense ${index + 1}: ${userBudget.expenses[index]}`);
  // }
}

function countExpenses(userBudget) {
  let totalExpense = 0;
  for (let index = 0; index < userBudget.expenses.length; index++) {
    totalExpense += userBudget.expenses[index];
  }
  return totalExpense;
}

function remainBalAfterExpenses(userBudget) {
  const remainBalanceAfterExpense =
    userBudget.remainBal - userBudget.totalExpense;
  return remainBalanceAfterExpense;
}

function savingsRates(userBudget) {
  const totalSavings =
    userBudget.remainBalanceAfterExpense * userBudget.savingsRate;
  return totalSavings;
}

function stat(userBudget) {
  let status =
    userBudget.totalExpense > userBudget.remainBal
      ? "Needs Improvement. Consider reducing Expenses"
      : "Average";
  return userBudget.status;
}

function output(userBudget) {
  result.innerHTML = `

  <p>User: ${userBudget.userName}</p>
  <p>Total Income: ${userBudget.income}</p>
  <p>Tax Deducted (10%): ${userBudget.taxAmt}</p>
  <p>Net Income After Tax: ${userBudget.remainBal}</p>
  <p>Total expenses: ${userBudget.totalExpense}</p>
  <p>Remain Balance: ${userBudget.remainBalanceAfterExpense}</p>
  Savings (20% of Balance): ${userBudget.totalSavings}</p>
  ${userBudget.status}`;
}

function calculateBudget(userBudget) {
  //tax amount calculation
  userBudget.taxAmt = totalTax(userBudget);
  //remqin balance calculation
  userBudget.remainBal = remainBalance(userBudget);
  //expenses quantity

  //expense list
  //   userBudget.expenses = expenseEntry(userBudget);
  //total expenses
  userBudget.totalExpense = countExpenses(userBudget);
  //remainBalance After expenses
  userBudget.remainBalanceAfterExpense = remainBalAfterExpenses(userBudget);
  //total savings
  userBudget.totalSavings = savingsRates(userBudget);
  userBudget.status = stat(userBudget);
  storeBudgetToLocal(userBudget);
}

// runBudgetApp();

function loadFromLocal() {
  const saved = getBudgetFromLocal();
  if (saved) {
    output(saved);
  }
}

window.addEventListener("load", loadFromLocal);

const drophere = document.querySelector("#dropHere");
const dragMe = document.querySelector("#dragME");

dragMe.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("idta", e.target.id);
});
drophere.addEventListener("dragover", function (e) {
  e.preventDefault();
});
drophere.addEventListener("drop", function (e) {
  const id = e.dataTransfer.getData("idta");
  drophere.appendChild(document.querySelector(`#${id}`));
  e.preventDefault();
});
