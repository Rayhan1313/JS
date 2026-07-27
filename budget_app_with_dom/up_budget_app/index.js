const userName = document.querySelector("#usrName");
const income = document.querySelector("#income");
const expenseQty = document.querySelector("#expenseQty");
const startBudgeting = document.querySelector("#startBudgeting");
const expenseList = document.querySelector("#expenseList");
const calculateBudgetID = document.querySelector("#calculateBudget");
const reset = document.querySelector("#reset");
const result = document.querySelector("#budgetResult");

startBudgeting.addEventListener("click", expenseEntry);
calculateBudgetID.addEventListener("click", runBudgetApp);
reset.addEventListener("click", resetFunction);
userName.addEventListener("input", validation);
income.addEventListener("input", validation);
expenseQty.addEventListener("input", validation);

startBudgeting.disabled = true;
function resetFunction() {
  clearLocalStorage();
  result.innerHTML = "";
}

function validation() {
  const validUser = userName.value.trim().length > 0;
  const validIncome = parseFloat(income.value) > 0;
  const validExpenseQty = parseInt(expenseQty.value) > 0;

  startBudgeting.disabled = !(validUser && validIncome && validExpenseQty);
}

function expenseEntry() {
  //   console.log(expenseQty.value);

  //   if (isNaN(parseInt(expenseQty.value)) || parseInt(expenseQty.value) < 0) {
  //     alert(`Incorrect expense input`);
  //   } else {
  for (let i = 1; i <= expenseQty.value; i++) {
    //   console.log(expenseQty.value);
    const newLabel = document.createElement("label");
    newLabel.innerText = `Enter Expense ${i}: `;
    const newInput = document.createElement("input");

    newInput.type = "number";
    newInput.classList.add("trackExpense");
    const br = document.createElement("br");

    expenseList.appendChild(newLabel);
    expenseList.appendChild(newInput);
    expenseList.appendChild(br);
  }

  calculateBudgetID.style.display = "inline-block";
  reset.style.display = "inline-block";
  //   }
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
}

function userInput(inputMessage, isNumber = false) {
  const uInput = prompt(inputMessage);
  return isNumber ? parseFloat(uInput) : uInput;
}

function totalTax(userBudget) {
  let tTax = userBudget.income * userBudget.taxRate;
  return tTax;
}

function remainBalance(userBudget) {
  let remainBal = userBudget.income - userBudget.taxAmt;
  return remainBal;
}

function countExpenses(userBudget) {
  let totalExpense = 0;
  for (let index = 0; index < userBudget.expenses.length; index++) {
    totalExpense += userBudget.expenses[index];
  }
  return totalExpense;
  console.log(totalExpense);
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
  return status;
}

function output(userBudget) {
  result.innerHTML = `
  <p>User: ${userBudget.userName}</p>
  <p>Total Income: ${userBudget.income}</p>
  <p>Tax Deducted (10%): ${userBudget.taxAmt}</p>
  <p>Net Income After Tax: ${userBudget.remainBal}</p>
  <p>Total expenses: ${userBudget.totalExpense}</p>
  <p>Remain Balance: ${userBudget.remainBalanceAfterExpense}</p>
  <p>Savings (20% of Balance): ${userBudget.totalSavings}</p>
  <p>${userBudget.status}</p>`;
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

function runBudgetApp() {
  userBudget = {
    userName: userName.value,
    income: parseFloat(income.value),
    taxRate: 0.1,
    savingsRate: 20 / 100,
    taxAmt: 0,
    remainBal: 0,
    expenseQty: parseInt(expenseQty.value),
    expenses: [],
    totalExpense: 0,
    remainBalanceAfterExpense: 0,
    totalSavings: 0,
    status: "",
  };
  if (
    !userBudget.userName ||
    isNaN(userBudget.income) ||
    userBudget.income <= 0
  ) {
    alert(`Incorrect username or income input`);
  }

  let trackExpense = document.getElementsByClassName("trackExpense");
  //   console.log(trackExpense.length);
  for (let i = 0; i < trackExpense.length; i++) {
    let expense = parseInt(trackExpense[i].value);
    userBudget.expenses.push(isNaN(expense) || expense < 0 ? 0 : expense);
  }
  //   console.log(userBudget.expenses);
  calculateBudget(userBudget);
  storeBudgetToLocal(userBudget);
  output(userBudget);

  //expense Breakdown
  for (let index = 0; index < userBudget.expenses.length; index++) {
    console.log(`Expense ${index + 1}: ${userBudget.expenses[index]}`);
  }
}

function runBudget() {
  const savedData = getBudgetFromLocal();
  if (savedData) {
    output(savedData);
  }
}

window.addEventListener("load", runBudget);
