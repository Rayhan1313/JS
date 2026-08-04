/*
class student {
  constructor(id, name) {
    ((this.id = id), (this.name = name));
  }
  set userName(name) {
    this.name = name;
  }
  get output() {
    return `${this.id} : ${this.name}`;
  }
}

let s1 = new student(101, "Rayhan");
console.log(s1);  
let neww = (s1.userName = "Himel");
console.log(s1.output);

*/

// class student {
//   constructor(id, name, contact) {
//     ((this.id = id), (this.name = name), (this.contact = contact));
//   }
//   set uName(name) {
//     this.name = name;
//   }
//   get output() {
//     return this.name + " : " + this.contact;
//   }
// }

// let s1 = new student(101, "Rayhan Himel", 1608986959);
// console.log(s1);

// s1.uname = "Rayhan";
// console.log(s1.uname);
// console.log(s1.output);

class student {
  constructor(division, district, subDistrict) {
    ((this.division = division),
      (this.district = district),
      (this.subDistrict = subDistrict));
  }

  set subDistrictTa(subDistrict) {
    this.subDistrict = subDistrict;
  }

  get output() {
    return `My division ${this.division}, District is ${this.district} and my sub-District is ${this.subDistrict}`;
  }
}

let classTa = new student("Dhaka", "Tangail", "Tangail Sadar");
console.log(classTa);
classTa.subDistrictTa = "Gharinda";

console.log(classTa.subDistrict);
console.log(classTa.output);
