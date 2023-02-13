
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
