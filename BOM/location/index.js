// const locations = document.querySelector("#location-div");
// // console.log(locations);

// const p1 = locations.children[0];
// p1.innerHTML = `Url: ${location.href}`;

// const p2 = locations.children[1];
// p2.innerHTML = `Protocol: ${location.protocol}`;

// const p3 = locations.children[2];
// p3.innerHTML = `Host Name: ${location.hostname}`;

// const p4 = locations.children[3];
// p4.innerHTML = `Port: ${location.port}`;

// const p5 = locations.children[4];
// p5.innerHTML = `Path Name: ${location.pathname}`;

// const p6 = locations.children[5];
// p6.innerHTML = `Host: ${location.host}`;

// const visit = document.querySelector("#visit-button");
// visit.addEventListener("click", function () {
//   location.assign("https://google.com");
// });

const locationDiv = document.querySelector("#location-div");
const visitBtn = document.querySelector("#visit-button");
visitBtn.target = "_blank";
const pg1 = locationDiv.children;
console.log(pg1);
console.log(locationDiv.children.length);
const results = [
  location.href,
  location.protocol,
  location.hostname,
  location.port,
  location.pathname,
  location.host,
];

const webLink = `https://www.youtube.com`;

for (let i = 0; i < locationDiv.children.length; i++) {
  locationDiv.children[i].innerHTML = results[i];
}

visitBtn.addEventListener("click", function () {
  location.assign(webLink);
});
