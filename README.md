
# ES6
Compiler is a software that converts high-level language to low-level assembly language. A transpiler is another software, sometimes called a source-to-source compiler, which converts a high-level language to another high-level language.

# let and const and var
We have three ways to declare variable.

## What is temporal Dead Zone?
## Are let and const declarations hoisted?
'let' and 'const' declarations are hoisted but they are hoisted very differently than 'var' declarations. Means they are in the temporal dead zone for the time being
If you declare a variable using 'var' keyword, you are able to access it even before initializing it. It is not possible in other languages. Memory is allocated to these variables and functions even before a single line of code is executed.
``` 
console.log(a);
var a = 10;
```
Here, even before setting the value of a = 10 or even declaring variable a, we can access it like above without any error, infact we get a special placeholder 'undefined' on console.
But, on executing the below given code, it gives ReferenceError: Cannot access 'b' before initialization
``` 
console.log(b);
let b = 10;
```
Hence, we can access 'b' only after it has been initialized some value. But under the hood, Javascript has allocated memory to both the variables and the values for these are undefined. In case of 'var', the identifier is in global space and in case of 'let', the identifier is in different scope. We can access 'a' with the 'window' object. But can you accesss 'b' with the 'window' object? No. They wont be attached to window object as they are maintainted in a separate storage space(reserved space for 'let' and 'const')
The 'var' is attached to the global object but in case of 'let' and 'const', they are also allocated memory(which is called hoisting) but in a different memory space than global.
```
window.a or this.a(displays the value of a) 
window.b or this.b(shows undefined. Treats like any other variable which was not present)
```

Temporal Dead Zone is the time since the variable was hoisted and till it is initialized some value. The time between this is called Temporal Dead Zone. Whenever you try to access the variable in the temporal dead zone, it gives you a reference error. So anything before let a = 10 is temporal dead zone. You can access a anywhere after the initialization.
If you try to access a random undefined variable you will get ReferenceError: 'x' is not defined. Thus, when javascript engine tries to find the variable 'x' in the current scope, it was not be able to find it.

## Duplicate redeclaration of let and const variable.
```
var a = 9;
let b = 100;
```
Redeclaring let variable 'b' gives SyntaxError: Identifier 'b' has already been declared. Javascipt engine will not execute a single line of code if it sees duplicate redeclaration. It does not log or reach a single line of code. It just upfront says 'not possible' and gives sytanx error. Same is the case when you try to redeclare b as var. Thus you cannot use same name in the same scope again. But you can do this in case of var i.e 'a' here.

## Important difference between let and const
const works much similar to let but it is even more strict than let. It also is allocated memory in scope other than global and also goes through temporal dead zone.
In case of 'let' you can just declare the variable and initialize it later anywhere in the program.
```
let c;
...
...
...
c = 99;
```
You cannot do the same thing in case of const. It will give SyntaxError: Missing initializer in const declaration. The code doesn't run, it is just rejected upfront.const is very strict. Const is meant to be initialized where it is declared.\

## TypeError

```
const x = 10;
x = 1000;
```
The above code will give TypeError: Assignment to constant variable.

## SyntaxError VS ReferenceError VS TypeError
TypeError: Assignment to constant variable - You are trying to assign any other value to const variable. It is a typeerror because variable is of type const. It should be declared and initialized together. You cannot assign new value later on.

SyntaxError: Missing initializer in const declaration. - Declaring const without initializing.

SyntaxError: Identifier 'b' has already been declared - Duplication declaration.

ReferenceError: Cannot access 'b' before initialization - As 'b' will be in the temporal dead zone.

ReferenceError: 'x' is not defined - Trying to access some random variable as it is not there in the locla memory.

## Difference between var, let and const
Whenever you can use const, you should use it. Whenever you want to put in some value which is not changed later, whenever you dont have to assign any other value to the same variable, use const as it is more strict. You wont run into any unexpected errors.
If not const, try to use let wherever possible as it also has temporal dead zone and you wont run into unexpected error like undefined, etc.
Dont use var. keep it aside. There might be some cases you would want to use var but use it very consciously.
Let and const are more preferred.

## How to avoid Temporal Dead Zone?
The best way to avoid temporal dead zone is to put your declarations and initializations on the top of the scope so that as soon as your code starts running, it hits the initialization part at the first and then you do something with this variables. Otherwise you can run into a lot of unexpected errors.
By doing so we are shrinking the temporal dead zone window to zero while moving the initializations on the top.

# Callback
Javascript is synchronous single threaded language and can just do one thing at a time. Callback is a powerful way to do asynchronous thing in javascipt. Callback plays a very important role in writing asynchronous code in javascript. Infact Asynchronous Programming in Javascript exists because callback exists.
```
console.log("Namaste")
setTimeout(function(){
    console.log("Javascipt");
}, 5000);
console.log("Season 2")
```
But there are two important issues we face with calllbacks: 
Callback Hell
Inversion of Control
## Callback Hell
A lot of nested callbacks and the code becomes unmaintainable.
Suppose we are creating a E-Commerce website and have a cart in it.
```
console.log("Pyramid of Doooooom");
const cart = ["shoes", "Denim", "Tank Top"];
api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummary(
            function (){
                api.UpdateWallet();
            }
        )
    });
})

```
## Inversion of Control
Inversion of control is the another problem while using callback. It means you loose the control of your code when we are using callbacks because we pass callback function into another function and we dont know wheather that function will ever execute that callback or not
```
api.createOrder(cart, function (){
    api.proceedToPayment();
}
```
In the above code, we gave the api.proceedTopPayment as callback to createOrder. And we as a developer are sitting relaxed and blindly trusting createOrder api, expecting createOrder function at some point of time will create an order and will call our function back. This is very risky. How? ProcessToPayment is important piece of our code. We gave the control of our program to createOrder api. Now it the responsibility of createOrder to call our function back and we are blindly trusting createOrder api. What if our callback function was never called? What if our callback function is called twice and payment happens twice?

Whenever we have a callback function and we pass it to some other function, we are giving the control of our function to some other code and we dont know what is happing behind the scenes. This inversion of control needs to be taken care of.

# Promises
Promises are used to handle async operations in javascript. Passing callback function(proceedToPayment) in createOrder is not reliable. We are giving control of our program to some other part of code which we are not aware of. This is where promises come into picture. This can done with the help of promises in the following manner.
```
const promise = createOrder(cart)
// {data: undefined}
// after some time: {data: orderDetails}
promise.then(proceedToPayment(orderID));
```
createOrder will not take the callback function but will take cart and it will return a promise. Promise is nothing but a empty object with some data value in it and this data value will hold whatever the createOrder api will return to us. createOrder api is an async operation and will take some time to execute but as soon as the above line (const promise = createOrder(cart)) is executed, it will return us an object with data with some empty undefined property. It will just assume that is returning us an object with some undefined property(not defined at that moment itself). And the program will go on executing and after say 5 sec 6 sec whatever time it takes, the empty object will be filled with data automatically({data: orderDetails}).

.then function is available over promise object. Once we have the ({data: orderDetails}) the callback function will be automatically be called. 

## Callbacks VS Promises and Importance of Promise

The code created using promises is a lot better than the code created using callbacks How? By PASSING CALLBACK FUNCTION proceedToPayment to createOrder api, we were blindly trusting createOrder Api. In case of promise, we are ATTACHING A CALLBACK funtion to a promise object. There is a difference between PASSING A FUNCTION and ATTACHING A FUNCTION.

In passing a function we just pass the function proceedToPayment to createOrder and createOrder would have called it whenever it wanted to. In case of promise we have control of out program with us i.e createOrder api will only do its job and it will fill the promise object with the data whenever it wants to and as soon as the object is filled with that data it will automatically call our function back and we will have control of our program with us. 

Promises gives us the gaurantee that it will call this callback function whenever there is data inside the promise object. Earlier we had a doubt What if our callback function is called twice and payment happens twice or thrice or might never call it? Promises handle it beautifully. As soon as we have data inside promise, it will call this function definetely and it will just call it once. 

## Promise Object in Browser
```
const GITHUB_API = "https://api.github.com/users/aishwarya-wappnet"
const user = fetch(GITHUB_API);
console.log(user);
```
fetch() is an api given by browser to make external calls or api calls. The GITHUB_API gives us the info of the username. We will try to fetch this user info from this api. By design, the fetch function returns us the promise. As soon as the 2nd line is executed, it will return us the promise object.

Try adding debugger on line 2. The user will be undefined.
```
GITHUB_API: "https://api.github.com/users/aishwarya-wappnet"
user: undefined
```
But as soon as this line is executed and the fetch function will be called, a promise object is going to be returned inside the user object.
```
user: Promise
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
```
Right now the promise is in pending state. There are two things: state of a promise and result of promise. Result is whatever data the fetch method will return. Promise state tells you what state the promise is in. Initially the promise will be in 'pending' state and once we have got the data back after the asynchronous operation is performed, the promise state will be in 'fulfilled' state.

## Deep dive into Promises
fetch is an async operation and takes some time to execute. console.log(user) will log:
```
Promise {<pending>}
```
It logs 'pending' but when you expand the promise object, it shows you fulfilled:
```
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
```
Why this inconsistency? 

When this console..log(user) is executed, at that time the 'user' object is in pending state as Javascipt engine executes everything wihtout waiting for anything. So at that particular time the promise is in 'pending state'. It takes some time to get the data and fill it back to get fulfilled. And so the browser logs 'pending'






