// const message = "Be careful! This page is suspicious";

// alert(message);

function confirmation() {
  let h1s = document.createElement("h1");
  h1s.classList.add("rayhan");
  h1s.style.backgroundColor = "yellow";
  h1s.style.color = "red";
  h1s.style.border = "2px solid green ";
  h1s.style.display = "inline-block";

  let decision = confirm(`Are you sure to delete?`);
  if (decision) {
    h1s.innerHTML = "<b>Deleted successfully.</b>";
  } else {
    h1s.innerHTML = "Cancelled.";
  }

  document.body.appendChild(h1s);
}

// confirmation();
// alert("hi");

function greet() {
  const ele = document.createElement("h1");
  let ok;
  const deta = prompt(`Enter your name: `);
  if (deta == null || deta == "") {
    ok = "Not found";
  } else {
    ok = `Welcome ${deta}`;
  }
  ele.textContent = ok;

  document.body.appendChild(ele);
}
greet();
