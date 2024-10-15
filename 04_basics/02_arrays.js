const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman", "flash","batman"];
// marvel_heroes.push(dc_heroes);//push does changes in same array 

// console.log(marvel_heroes);
// console.log(marvel_heroes.length);//4
// console.log(marvel_heroes[3][1]);
const all_heroes = marvel_heroes.concat(dc_heroes);//concat creates a new arr in which both the arrays are concatinated or combined
// console.log(marvel_heroes);
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usable_another_array = another_array.flat(Infinity); //arguement of flat function is till what depth we want to remove subarray and convert it into easily usable array elements
// console.log(usable_another_array);

console.log((Array.isArray("Samarth")));
console.log(Array.from("Samarth"));
console.log(Array.from({name : "hitesh"}));//important

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

