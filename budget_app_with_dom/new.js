const div = document.querySelector(".div");
const form = document.querySelector(".form");
const startBudgetingBtn = document.querySelector("#startBudgeting");
const userName = document.querySelector("#usrName");
const usrMonthlyIncome = document.querySelector("#monthlyIncome");
const userExpenseQty = document.querySelector("#expenseQty");
const buttonRow = document.querySelector(".buttonRow");
const reset = buttonRow.querySelector("#reset");
const calculateBudgetElement = buttonRow.querySelector("#calculateBudget");
const expenseContainer = document.querySelector("#expenseContainer");

startBudgetingBtn.addEventListener("click", expenseEntry);
calculateBudgetElement.addEventListener("click", runBudgetApp);
reset.addEventListener("click", resetAll);
userName.addEventListener("input", validation);
usrMonthlyIncome.addEventListener("input", validation);
userExpenseQty.addEventListener("input", validation);

startBudgetingBtn.disabled = true;
startBudgetingBtn.style.cursor = "not-allowed";

function validation() {
  const userNameValidate = userName.value.trim().length > 0;
  const usrMonthlyIncomeValidator = parseFloat(usrMonthlyIncome.value) > 0;
  const userExpenseQtyValidator = parseInt(userExpenseQty.value) > 0;

  startBudgetingBtn.disabled = !(
    userNameValidate &&
    usrMonthlyIncomeValidator &&
    userExpenseQtyValidator
  );
  if (!startBudgetingBtn.disabled) {
    startBudgetingBtn.style.cursor = "pointer";
  }
}

function resetAll() {
  expenseContainer.innerHTML = "";
  clearLocalStorage();

  expenseLists.placeholder = "";
}

function expenseEntry(e) {
  e.preventDefault();
  console.log(startBudgetingBtn);
  startBudgetingBtn.textContent = "Loading...";
  // startBudgetingBtn.style
  startBudgetingBtn.disabled = true;
  startBudgetingBtn.style.fontWeight = "bolder";

  setTimeout(function () {
    startBudgetingBtn.textContent = "Check Below";
  }, 1000);

  setTimeout(loading, 2000);
}

function loading() {
  startBudgetingBtn.disabled = true;
  startBudgetingBtn.style.cursor = "not-allowed";

  console.log("hi");
  for (let i = 1; i <= userExpenseQty.value; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("field");
    const newLabel = document.createElement("label");
    newLabel.for = "expense" + i;
    newLabel.textContent = `Enter Expense ${i}: `;

    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.classList.add("expenseLists");

    form.appendChild(newDiv);
    form.insertBefore(newDiv, buttonRow);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
  }
  reset.style.display = "block";
  calculateBudgetElement.style.display = "block";
}

function runBudgetApp() {
  userBudget = {
    userName: userName.value,
    income: parseFloat(usrMonthlyIncome.value),
    taxRate: 0.1,
    savingsRate: 20 / 100,
    taxAmt: 0,
    remainBal: 0,
    expenseQty: parseInt(expenseQty),
    expenses: [],
    totalExpense: 0,
    remainBalanceAfterExpense: 0,
    totalSavings: 0,
    status: "",
  };
  const expenseLists = document.getElementsByClassName("expenseLists");
  console.log(expenseLists);

  for (let k = 0; k < expenseLists.length; k++) {
    let expense = parseFloat(expenseLists[k].value);
    userBudget.expenses.push(isNaN(expense) || expense < 0 ? 0 : expense);
  }

  calculateBudget(userBudget);
  output(userBudget);
}

function storeBudgetToLocal(userBudget) {
  localStorage.setItem("userBudget", JSON.stringify(userBudget));
}

function getBudgetFromLocal() {
  const savedBudget = localStorage.getItem("userBudget");
  return savedBudget ? JSON.parse(localStorage.getItem("userBudget")) : null;
}

function clearLocalStorage() {
  localStorage.clear();
  alert(` Add Data Cleared`);
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
  expenseContainer.innerHTML = `
<table>
  <tr>
    <th>User Name</th>
    <td>${userBudget.userName}</td>
  </tr>
  <tr>
    <th>Total Income</th>
    <td>${userBudget.income}</td>
  </tr>
  <tr>
    <th>Tax Deducted (10%)</th>
    <td>${userBudget.taxAmt}</td>
  </tr>
  <tr>
    <th>Total expenses</th>
    <td>${userBudget.totalExpense}</td>
  </tr>
  <tr>
    <th>Remain Balance</th>
    <td>${userBudget.remainBalanceAfterExpense}</td>
  </tr>
  <tr>
    <th>Savings (20% of Balance)</th>
    <td>${userBudget.totalSavings}</td>
  </tr>
  <tr>
    <th>Status</th>
    <td>${userBudget.status}</td>
  </tr>
  
  
</table>`;
}

function calculateBudget(userBudget) {
  //tax amount calculation
  userBudget.taxAmt = totalTax(userBudget);
  //remqin balance calculation
  userBudget.remainBal = remainBalance(userBudget);

  //expense list
  // userBudget.expenses = expenseEntry(userBudget);
  //total expenses
  userBudget.totalExpense = countExpenses(userBudget);
  //remainBalance After expenses
  userBudget.remainBalanceAfterExpense = remainBalAfterExpenses(userBudget);
  //total savings
  userBudget.totalSavings = savingsRates(userBudget);
  userBudget.status = stat(userBudget);
  storeBudgetToLocal(userBudget);
}

function loadFromLocal() {
  const savedData = getBudgetFromLocal();
  if (savedData) {
    output(savedData);
  }
}

window.addEventListener("load", loadFromLocal);
