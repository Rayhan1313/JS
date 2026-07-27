// ===============================
// WEB STORAGE API
// localStorage
// sessionStorage
// Cookie
// ===============================

// ===============================
// LOCAL STORAGE
// ===============================

// Save String
localStorage.setItem("userName", "Rayhan");

// Get String
const userName = localStorage.getItem("userName");
console.log("LocalStorage Name:", userName);

// Remove One Item
// localStorage.removeItem("userName");

// Remove All
// localStorage.clear();

// ===============================
// STORE OBJECT IN LOCAL STORAGE
// ===============================

const student = {
  id: 101,
  name: "Rayhan",
  age: 28,
  country: "Bangladesh",
};

// Object ke string e convert korte hobe
localStorage.setItem("student", JSON.stringify(student));

// Abr object hisebe pete hole
const studentInfo = JSON.parse(localStorage.getItem("student"));

console.log(studentInfo);
console.log(studentInfo.name);

// ===============================
// STORE ARRAY IN LOCAL STORAGE
// ===============================

const subjects = ["HTML", "CSS", "JavaScript", "React"];

localStorage.setItem("subjects", JSON.stringify(subjects));

const allSubjects = JSON.parse(localStorage.getItem("subjects"));

console.log(allSubjects);

// ===============================
// SESSION STORAGE
// ===============================

// Save
sessionStorage.setItem("email", "rayhan@gmail.com");

// Get
const email = sessionStorage.getItem("email");

console.log("Session Email:", email);

// Remove One Item
// sessionStorage.removeItem("email");

// Remove All
// sessionStorage.clear();

// ===============================
// COOKIE
// ===============================

// Create Cookie
document.cookie = "username=Rayhan";

// Create Multiple Cookie
document.cookie = "country=Bangladesh";

// Cookie with Expire Date
const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);

document.cookie =
  "city=Dhaka; expires=" + expireDate.toUTCString() + "; path=/";

// ===============================
// Read Cookie
// ===============================

console.log(document.cookie);

// ===============================
// Update Cookie
// ===============================

document.cookie = "username=Abu Rayhan";

console.log(document.cookie);

// ===============================
// Delete Cookie
// ===============================

// Expire Date ke past e diye delete kora hoy

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// ===============================
// COOKIE FUNCTION
// ===============================

// Create Cookie
function setCookie(name, value, days) {
  const date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Read Cookie
function getCookie(name) {
  const cookieName = name + "=";

  const cookieArray = document.cookie.split(";");

  for (let cookie of cookieArray) {
    cookie = cookie.trim();

    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length);
    }
  }

  return null;
}

// Delete Cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// ===============================
// FUNCTION TEST
// ===============================

setCookie("language", "JavaScript", 5);

console.log(getCookie("language"));

// deleteCookie("language");
