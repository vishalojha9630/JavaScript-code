// ----- 1. Ways to print in JavaScript -----

// console.log("Hello World");
// // alert("Hello Mr. Vishal");
// document.write("This is Document write")


// ----- 2. Javascript console API -----

// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");`


// ----- 3. Variables in JavaScript -----

// Var:- Global level scope
// let:- block level scope --> local variable bann jata h . ise block ke bhar se use nai kr skte 


// var num1 = 34;
// var num2 = 56;
// console.log(num1 + num2);

// var myVar = "global"; // Declare a global variable
// function checkscope( ) {
// var myVar = "local"; // Declare a local variable
// document.write(myVar);
// }
// document.write(myVar, "\n")
// checkscope()


// ----- 4. Data types in JavaScript -----

//  Numbers:-
// var num1 = 455;
// var num2 = 45.55;
// console.log(num1, num2);

//  String:-
// var str1 = "This is a String";
// var str2 = 'This is a String';
// console.log(str1, str2);

//  Booleans:-
// var a = true;
// var b = false;
// console.log(a);
// console.log(b);

//  Objects Creation:-
//  marks = {
//     vishal: 65,
//     harry: 56.5,
//     munna: 45 }
// console.log(marks);

// obj = {
//     a: "BMW", 
//     b: "Volvo", 
//     c: "Toyota", 
//     d: "Fortuner"}
// 	for (var p in obj)
// 	{
// 		console.log(obj[p])	
// 		// console.log("<br>")
// 	}



// ----- 5. Operators in JavaScript ----- 

// // 1. Arithmatic Operator 
// var a = 34;
// var b = 56;
// console.log(a, b)
// console.log("The value of a+b", a + b);
// console.log("The value of a-b", a - b);
// console.log("The value of a*b", a * b);
// console.log("The value of a/b", a / b);

// // 2. Comparision Operator.
// var x = 56;
// var y = 34;
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);

// // 3. Logical Operators.
// // Logical AND:-
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // Logical OR:-
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT:-
// console.log(!false);
// console.log(!true);

// // 4. Assignment Operator 
// var c = b;
// c -= 2;
// c += 2;
// c *= 2;
// c /= 2;
// console.log(c);


//  ----- 6. if-else condition in JavaScript-----

// var age = 19;
// if (age > 18) {
//     console.log("Youn can Drink Rasna Water");
// } else {
//     console.log("Youn can't Drink Rasna Water");
// }


//  ----- 7. if-else ladder condition in JavaScript----- 

// var age = 25;
// if (age > 32) {
//     console.log("You are not a Kid");
// }
// else if (age > 26) {
//     console.log("Bacche nai rahe");
// }
// else if (age > 22) {
//     console.log("Yes Bacche nai rahe");
// }
// else if (age > 18) {
//     console.log("18 Bacche nai rahe");
// }
// else {
//     console.log("Bacche Rahe");
// }
// console.log("End of Ladder........");


//  ----- 8. For loop in JavaScript -----

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i==2) {
//         // break;
//         // continue;
//     }
//     console.log(arr[i]);
// }


// ----- 9. for-Each loop in JavaScript ----- 

// arr.forEach(function (element) {
//     console.log(element);
// })


//  ----- 10. Functions in JavaScript ------
// // Normal function:-
// function sayHello() {
//     document.write("Hello Guys!")   
// }
// sayHello()

// // Parameterise Function:-
// function hello(name, age) {
//     console.log(name + " is " + age + " year old ")
// }
// hello("Vishal", 22)

// // Return function:-
// function avg(a, b) {
//     c = (a+b)/2
//     return c
// }
// c1 = avg(20, 20)
// console.log(c1)

// function calcFact( num )
// {
// fact = 1
// for(let  i = 1; i <= num; i++ )
// {
// fact = fact * i;
// }
// return fact
// }
// console.log(calcFact(5))


// function concatenate(first, last) {
//     var full;
//     full = first + last;
//     return full;
//  }
//  function secondFunction() {
//     var result;
//     result = concatenate('Zara ', 'Ali');
//     document.write (result );
//  }
//  secondFunction()


// -------- 11. Events in Javascript ------

// function sayHello() {
//     alert("Hello Everyone!")
// }
// sayHello()

// function over() {
//     console.log ("Mouse Over");
//  }
//  function out() {
//     console.log ("Mouse Out");
//  }

// firstcontainer.addEventListener('click', function(){
//     console.log("click hua ");}) 
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");}) 


// ------ 12. Dialog Boxes ------
// Alert dialog box:-
// function Warn()
// {
//     alert("This a warning message!")
//     document.write("Alert ke baad bali warning!")
//     console.log("Alert ke baad bali warning!")
// }

// Confirmation Dialog Box:-
// function getConformation(){
//     retVal = confirm("Do u want to continue?")
//     if (retVal==true){
//         document.write("User wants to continue!")
//         return true
//     } else{
//         document.write("User don't want to continue")
//     }
// }

// Prompt Dialog Box:-
// function getValue(){
//     retVal = prompt("Enter your name: ", "Your name")
//     document.write("You have entered: " + retVal)
// }


// ----- 13. Objects ------

// let myobj = {
//     name:  'Vishal',
//     channel:  'codewithharry',
//     isActive:  true,
//     marks:  456 }
// console.log(myobj)
// console.log(myobj.isActive)


// Oneliner Object using arrow function:-
// great = () => ({name: "Vishal"})
// console.log(great())


// let sortedData = Movies.sort((a, b) => a.budget - b.budget);
// // console.log(sortedData);

// Array of object sort:-
// sortedData.map((item) => {
//     // console.log(item.title, item.budget);
// })



// ------ 14. String and String Methods ------

// myString = "Hello everyone welcome to Piecodes!, there are to several facility"
// console.log("Lenght of string is : " + myString.length)
// console.log(myString.indexOf("Good"));            /* searching of Index*/
// console.log(myString.lastIndexOf("Smart"));       /* Last IndexOf*/
// console.log(myString.charAt(3))                   /* charAt:- third index pr kya h */
// console.log(myString)
// console.log(myString.slice()); 
// d = myString.replace("Vishal", "Munna");
// console.log(d, myString); 
// document.write(myString.length)


// ----- 15. Arrays in JavaScript -----

//  myArr = [78, "vishal", "Fan", "camera", 56, null, true, 5, 7, 89, 5, 68]
// const arr = new Array(15,6,6,61,346,349,43,498)
// console.log(myArr.include(5))
// console.log(myArr);
// console.log(myArr[1])
// console.log(myArr.length)
// console.log(arr[2])  
// console.log(myArr.reverse())
// console.log(myArr.sort())
// console.log(myArr.pop()) remove the last elemnt in array 
// console.log(myArr.indexOf(56))   // check index 
// console.log(myArr.push(45))  // adding one or more element in array
// console.log(myArr.shift())      // Removes the first element from an array and returns that element.
// myArr.unshift(452)  adding first element in array 
// console.log(myArr.slice(0, 5))   // slice array
// console.log(myArr.splice(0, 2))     // Adds and/or removes elements from an array.  Remove an item by index position


// // map method:-
// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
//   let userFullnames = users.map(function(element){
//       return `${element.firstName} ${element.lastName}`;
//   })
//   console.log(userFullnames);


// filter method:-
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// M1: Task :- Using filter method
// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"]
// word = arr.filter(word => word == "and" || word == "Vishal" || word == "Name")
// console.log(word)

// M2: Using For loop:-
// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 'Vishal' || arr[i] == 'Name' || arr[i] == "and")
//   {
//     arr1.push(arr[i])
//   }
// }
// console.log(arr1);

// M3: Using for-in loop:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [ ];
// for (i in arr){
//     if(arr[i] == "Name" || arr[i] == "and" || arr[i] == "Vishal") {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)

// M4: Using for-of:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [ ];
// for (i of arr){
//     if(i == "Name" || i == "and" || i == "Vishal") {
//         arr1.push(i)
//     }
// }
// console.log(arr1)



//  16. ------ DOM Manipulation -------

// let elem = document.getElementById('title');
// console.log(elem);
// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// // console.log(elem.innerHTML);
// // console.log(elem.innerText); 

// // console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText); 
// tn = document.getElementsByTagName('div')
// // console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
// console.log(elem);

// function myFunc() {
//     var ret = document.title;
//     alert("Document Title : " + ret);

//     var ret = document.URL;
//     alert("Document URL : " + ret);

//     var ret = document.forms[0];
//     alert("Document First Form : " + ret);

//     var ret = document.forms[0].elements[1];
//     alert("Second element : " + ret);
// }


// ------ 17. Error and exception handling -----

//  1. Try catch:- 
// function myFunc() {
//     var a = 101;    
//     try {
//        alert("Value of variable a is : " + a );
//     }
//     catch ( e ) {
//        alert("Error: " + e.description );
//     }
// }

// 2. Try catch with finally:-
// function myFunc() {
//     var a = 102;
//     try {
//        alert("Value of variable a is : " + a );
//     }
//     catch ( e ) {
//        alert("Error: " + e.description );
//     }
//     finally {
//        alert("Finally block will always execute!" );
//     }
//  }

// 3. Try catch with throw:- 
// function myFunc() {
//     var a = 100;
//     var b = 0;
//     try {
//        if ( b == 0 ) {
//           throw( "Divide by zero error." ); 
//        } else {
//           var c = a / b;
//        }
//     }   
//     catch ( e ) {
//        alert("Error: " + e );
//     }
//  }

// 4. Onerror method:-
// window.onerror = function(){ 
//     alert("An error occured!")
// }

// window.onerror = function (msg, url, line) {
// 	alert("Message : " + msg );
// 	alert("url : " + url );
// 	alert("Line number : " + line );
// }


// ------ 18. Arrow Function ------

// Ceating a regular function:-
// greeting = function(){
//     return "Hello Everyone Good Morning!"
// }
// console.log(greeting())

// creating arrow function:-
// const greet = () => {
//     return "Good Morning!"
// }
// console.log(greet())

// one liner will automatically return:-
// const greet = () => "Good Morning!"
// console.log(greet())



//  -------- 19. Selecting Using Query ----------

// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);



// ------ 20. JSON -------
// obj = {name:"vishal", length:1}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);


// ------ 20. Template Literal-Backticks------

// a=35
// b=40
// console.log(`This is my ${a} or ${b}`);

