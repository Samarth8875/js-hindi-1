// Object.create // creates objects through constructor

// object literal

const mySym = Symbol("key1");
const mySym1 = Symbol("key1");

const JsUser = {
    name: "Samarth",
    "full name" : "Samarth Agarwal",
    mySym1: "mykey1", // will be accessed as string
    [mySym] : "mykey1",// to access as symbol
    age: 21,
    location: "Jaipur",
    email: "samarth@xyz",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);//to access object
// console.log(JsUser["email"]);//another method to access object and remember to pass email or anything else as string to access object as we discused that name,email,age etc all are processed as string
// console.log(JsUser["full name"]); // full name can only be accessed by this method
// // console.log(JsUser.full name)//gives error
// console.log(JsUser.mySym);//wrong method. Symbol cant be accessed like this
// console.log(JsUser[mySym]);//Correct way
// console.log(JsUser.mySym1);//gives ouput as string. Declared and accessed both incorrectly

JsUser.email = "godofWar@smashkart";
// Object.freeze(JsUser);
JsUser.email = "kf@Samarth@bs";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting);//undefined
JsUser.greeting();
JsUser.greetingTwo();



