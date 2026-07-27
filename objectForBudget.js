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

function expenseEntry(userBudget) {
  let expenses = [];
  for (let i = 0; i < userBudget.expenseQty; i++) {
    let expense = userInput(`Enter expense: `, true);
    if (isNaN(expense) || expense < 0) {
      expense = 0;
      console.log(`Incorrect expense input`);
    }
    expenses.push(expense);
  }
  return expenses;
  // console.log(expenses);
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
  return status;
}

function output(userBudget) {
  console.log(`User: ${userBudget.userName}`);
  console.log(`Total Income: ${userBudget.income}`);
  console.log(`Tax Deducted (10%): ${userBudget.taxAmt}`);
  console.log(`Net Income After Tax: ${userBudget.remainBal}`);
  console.log(`Total expenses: ${userBudget.totalExpense}`);
  console.log(`Remain Balance: ${userBudget.remainBalanceAfterExpense}`);
  console.log(`Savings (20% of Balance): ${userBudget.totalSavings}`);
  console.log(status);
}

function calculateBudget(userBudget) {
  //tax amount calculation
  userBudget.taxAmt = totalTax(userBudget);
  //remqin balance calculation
  userBudget.remainBal = remainBalance(userBudget);
  //expenses quantity
  userBudget.expenseQty = userInput(`How Many Expenses you have? `, true);
  //expense list
  userBudget.expenses = expenseEntry(userBudget);
  //total expenses
  userBudget.totalExpense = countExpenses(userBudget);
  //remainBalance After expenses
  userBudget.remainBalanceAfterExpense = remainBalAfterExpenses(userBudget);
  //total savings
  userBudget.totalSavings = savingsRates(userBudget);
  status = stat(userBudget);
  storeBudgetToLocal(userBudget);
}

function runBudgetApp() {
  let userBudget = getBudgetFromLocal();

  if (userBudget) {
    console.log(`Budget loading from Local Storage`);
    output(userBudget);
  } else {
    userBudget = {
      userName: userInput(`Enter your username: `),
      income: userInput(`Enter your monthly income`, true),
      taxRate: 0.1,
      savingsRate: 20 / 100,
      taxAmt: 0,
      remainBal: 0,
      expenseQty: 0,
      expenses: [],
      totalExpense: 0,
      remainBalanceAfterExpense: 0,
      totalSavings: 0,
      status: "",
    };

    calculateBudget(userBudget);
    output(userBudget);

    //expense Breakdown
    for (let index = 0; index < userBudget.expenses.length; index++) {
      console.log(`Expense ${index + 1}: ${userBudget.expenses[index]}`);
    }
  }
}

runBudgetApp();
