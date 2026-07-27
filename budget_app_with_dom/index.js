const expenseContainer = document.querySelector("#expenseContainer");

const userName = document.querySelector("#usrName");
const usrMonthlyIncome = document.querySelector("#monthlyIncome");
const userExpenseQty = document.querySelector("#expenseQty");
const startBudgetingBtn = document.querySelector("#startBudgeting");

const calculateBudgetBtn = document.querySelector("#calculateBudget");
const resetBtn = document.querySelector("#reset");

startBudgetingBtn.addEventListener("click", expenseEntry);

function expenseEntry(e) {
  e.preventDefault();
  console.log(startBudgetingBtn);

  startBudgetingBtn.style.display = "none";
  console.log(userExpenseQty.value);
  for (let i = 1; i <= userExpenseQty.value; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("field");
    const newLabel = document.createElement("label");
    newLabel.htmlFor = "expense" + i;
    newLabel.textContent = `Enter Expense ${i}: `;

    const newInput = document.createElement("input");

    newInput.type = "number";
    newInput.id = "expense" + i;
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    expenseContainer.appendChild(newDiv);
    // calculateBudgetBtn.style.display = "block";
  }
  calculateBudgetBtn.style.display = "inline-block";
  resetBtn.style.display = "block";

  // userExpenseQty.value > 0 || userExpenseQty.value != "";

  //   let expenses = [];
  //   for (let i = 0; i < expenseQty; i++) {
  //     let expense = userInput(`Enter expense: `, true);
  //     if (isNaN(expense) || expense < 0) {
  //       expense = 0;
  //       console.log(`Incorrect expense input`);
  //     }
  //     expenses.push(expense);
  //   }
  //   return expenses;
  //   console.log(expenses);
}
