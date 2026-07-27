//spread operator sob unpack kore

function zogKori(a, b, c) {
  return a + b + c;
}

let a = [1, 7, 2];
console.log(zogKori(...a)); //akhane spread kore pathalam

let b = [3, 5, ...a, 9];
console.log(b);

let mix = [...a, ...b];
console.log(mix);

let bc1in = {
  name: "rayhan",
  age: 15,
};

let bc2in = {
  job: true,
  location: "Walton Office",
  country: "Bangladesh",
};

const info = { ...bc1in, ...bc2in };
console.log(info);
