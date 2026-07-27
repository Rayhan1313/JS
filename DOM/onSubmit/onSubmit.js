let form = document.querySelector("form");
let uname = form.querySelector("div label #name");
let email = form.querySelector("div label #email");
let password = form.querySelector("div label #password");

console.log(password);

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  const data = {
    name: uname.value,
    email: email.value,
    password: password.value,
  };
  console.log(data);
  ((uname.value = ""), (email.value = ""), (password.value = ""));
}
