// let array = new Array(5);

// array[0] = 'Rayhan';
// array[1] = 'Ray';
// array[2] = 'Rayh';
// array[3] = 'RRay';
// array[4] = 'Rayhans';
// array[5] = 'Rayoooo';
// console.log(array);

/*
let items = [];
items.push('Mango');
console.log(items);
items.push('Orange','Banana', 'Water mealon', 'Lemon');
console.log(items);
let size = items.length
console.log(size);

for(let i =1; i<=size; i++){
    if(i == 5){
        break;
    }
    document.write(`<p>${items[i]}<p><br>`);
}

items.pop();
console.log(items);
items.pop();
console.log(items);
document.write(`${items} \n`);

*/


//array push and concat
/*
let items = [];
let list = [];
items.push('Mango');

// console.log(items);

items.push('Orange','Banana', 'Water mealon', 'Lemon');

// console.log(items);

list.push('Diploma', 'Milk', 'Sugar', 'Dry Cake');
// console.log(list);

items= items.concat(list) ;
console.log(items);

*/



// loop in array 

/*
let number = new Array();
let sum = 0;
// array[0] = 'Rayhan';
// array[1] = 'Ray';
// array[2] = 'Rayh';
// array[3] = 'RRay';

//array size input newa hocche user theke
const arraySize = parseInt(prompt('Enter Array Size: '));
for(let j=0 ; j<arraySize; j++){
    //array input nicchi
    number[j] = parseFloat(prompt(`Enter array number : `)); // array[0] = 'Rayhan'; --concepet aita
    sum = sum + number[j];

}




// for(let i=0; i< 5; i++){
//     console.log(number[i]);
//     sum = sum + number[i];
// }
console.log('Total value: ' + sum);


*/


/* ************       Array use kore duita ba je koyda chawa se koyta number zog/ adition kora ************* */

/*
let a =new Array();
let sum = 0;

const loopSize = parseInt(prompt(`Enter Array Size: `));

for(let i=0; i<loopSize; i++){
    a[i] = parseFloat(prompt(`Enter Array number ${i+1}: `));
    console.log(`Array number ${i+1}: ${a[i]}`);
     sum += a[i];
}
console.log(`The Sum is: ${sum}`);
*/





// array method related tags 
/*     push , pop,  concat, shift, unshift, slice , splice , sort            */


let people = ['Rayhan', 'Himel', 'Tanshin', 'Mahin', 'Rubaiya', 'Tisha', 'Rupa'];
/*
//push method    --add item at the end of array
people.push('Shake', 'Misha');   
console.log(people);

//pop method  -- delete last item from array
people.pop();
console.log(people);

//shift method  (remove item at the begining of an array)
people.shift();
console.log(people);

//unshift method (adds a data at the begining of an array)
people.unshift('Rayhan');
console.log(people);

//splice add + insert
people.splice(1,3,'Rayhanss','Klemon');
console.log(people);

//slice 
let piece= people.slice(1,3);
console.log(piece);

console.log(people.sort());



*/
//number sorts

/*
let digits = [1,30,9,8,5,10,20,9,11];

console.log(digits.sort(function(a,b){
    return a-b;
}));

*/

/*

let num = [101,909,71,450,32,67,398,971,400,50,250]

num.sort(function(a,b)
{
    return a-b;
});
console.log(num);
num.reverse();
console.log(num)


console.log(people);
people.sort()
console.log(people);
people.reverse();
console.log(people);

people.sort(function(a,b){
    return a.length - b.length; 
});
console.log(people.sort()); 



*/


/** biggest number  with 1D array and loop */

/*
function highestScore(a){
    console.log(a);
    let maxScore = a[0];
    for(let i =1; i< a.length; i++){
        if(maxScore < a[i]){
            maxScore = a[i];
        }   
    }
    // console.log(maxScore);
    return maxScore;
}


let score = [];
let scoreQty = parseInt(prompt(`How many result need to to compare: `));
    for(let i=0 ; i<scoreQty; i++){
        score[i] = parseFloat(prompt(`Enter score number ${i +1}: `));
        
    }
// console.log(score);


let numbers = highestScore(score) ;
console.log(numbers);


*/

/*************************    Find the highestScorer with 2D array     ***************** */

/*
function highestScorers(scorerList){
    let highestScorer = scorerList[0, 0];
    let highestScore = scorerList[0, 1]
    for(let x=1 ; x< scorerList.length; x++)
        if(highestScore < scorerList[x, 1]){
            highestScore = scorerList[x, 1];
            highestScorer = scorerList[x, 0];
        } 
        return highestScorer;
}

let scoreSheet =[
    ["rayhan", 130],
    ["Tisha", 150],
    ["Misha", 90],
    ["Raiyan", 150]
]

// console.log(scoreSheet)


console.log(highestScorers(scoreSheet))

*/


/*
let howLook = [
    ['Rayhan', 21],
    ['Eus',28],
    ['Dreak', 50 ]
];


function highScorer(howLook){
    let maxScore = howLook[0] [1];
    console.log(maxScore);
    let maxScorer= howLook[0] [0];
    for(let i=1; i< 3; i++){
        if(maxScore< howLook[i ][ 1]){
            maxScore = howLook[i ][1];
            maxScorer = howLook[i] [0];
        }
    }
return maxScorer;
}


console.log(highScorer(howLook));

*/