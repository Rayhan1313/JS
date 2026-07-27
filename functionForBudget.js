//create function part start

//data localStorage a save korbo

function userInput(inputMessage, isNumber = false) {
  const uInput = prompt(inputMessage);
  return isNumber ? parseFloat(uInput) : uInput;
}

function totalTax(taxAmt, taxRate) {
  let tTax = taxAmt * taxRate;
  return tTax;
}

function remainBalance(income, taxAmt) {
  let remainBal = income - taxAmt;
  return remainBal;
}

function expenseEntry(expenseQty) {
  let expenses = [];
  for (let i = 0; i < expenseQty; i++) {
    let expense = userInput(`Enter expense: `, true);
    if (isNaN(expense) || expense < 0) {
      expense = 0;
      console.log(`Incorrect expense input`);
    }
    expenses.push(expense);
  }
  return expenses;
  console.log(expenses);
}

function countExpenses(expenses) {
  let totalExpense = 0;
  for (let index = 0; index < expenses.length; index++) {
    totalExpense += expenses[index];
  }
  return totalExpense;
}

function remainBalAfterExpenses(remainBal, totalExpense) {
  const remainBalanceAfterExpense = remainBal - totalExpense;
  return remainBalanceAfterExpense;
}

function savingsRates(remainBalanceAfterExpense, savingsRate) {
  const totalSavings = remainBalanceAfterExpense * savingsRate;
  return totalSavings;
}

function stat(totalExpense, remainBal) {
  let status =
    totalExpense > remainBal
      ? "Needs Improvement. Consider reducing Expenses"
      : "Average";
  return status;
}

function output(
  userName,
  income,
  totalExpense,
  taxAmt,
  remainBal,
  remainBalanceAfterExpense,
  totalSavings,
  status,
) {
  console.log(`User: ${userName}`);
  console.log(`Total Income: ${income}`);
  console.log(`Tax Deducted (10%): ${taxAmt}`);
  console.log(`Net Income After Tax: ${remainBal}`);
  console.log(`Total expenses: ${totalExpense}`);
  console.log(`Remain Balance: ${remainBalanceAfterExpense}`);
  console.log(`Savings (20% of Balance): ${totalSavings}`);
  console.log(status);
}

function runBudgetApp() {
  const userName = userInput(`Enter your username: `);
  const income = userInput(`Enter your monthly income`, true);

  const taxRate = 0.1;
  let savingsRate = 20 / 100;

  //tax amount calculation
  const taxAmt = totalTax(income, taxRate);
  //remqin balance calculation
  let remainBal = remainBalance(income, taxAmt);
  //expenses quantity
  let expenseQty = userInput(`How Many Expenses you have? `, true);
  //expense list
  let expenses = expenseEntry(expenseQty);
  //total expenses
  let totalExpense = countExpenses(expenses);
  //remainBalance After expenses
  const remainBalanceAfterExpense = remainBalAfterExpenses(
    remainBal,
    totalExpense,
  );
  //total savings
  const totalSavings = savingsRates(remainBalanceAfterExpense, savingsRate);
  const status = stat(totalExpense, remainBal);

  const result = output(
    userName,
    income,
    totalExpense,
    taxAmt,
    remainBal,
    remainBalanceAfterExpense,
    totalSavings,
    status,
  );

  //expense Breakdown
  for (let index = 0; index < expenses.length; index++) {
    console.log(`Expense ${index + 1}: ${expenses[index]}`);
  }
}

runBudgetApp();
