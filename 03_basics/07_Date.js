let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);// Months start from  0 in javascript
let myCreatedDate = new Date(1970, 1, 23,5,3)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long";
})







