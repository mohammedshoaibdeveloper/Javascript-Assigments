// chap #1   AlERTS
/*1.Write a script to greet your website visitor using JS alert
box.
alert('Helloworld')
*/



/* 2.Write a script to display following message on your web page:
alert('Error!Please Enter a Valid Password');
*/

/*
3. Write a script to display following message on your web
page: (Hint : Use line break)
alert('Welcome to JsLand..\nHappyCoding')
alert("Happy Coding!")
*/

/*4. Write a script to display following messages in sequence:
alert('Welcome to JsLand')
*/


/*5. Generate the following message through browser’s
developer console:
console.log("Hello...I can run Js through my webbrowser console")
*/

// chap 2   VARIABLES FOR STRINGS
// 1. Declare a variable called username. 
// var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName = "Mohammed Shoaib";

// 3. Write script to a) Declare 
// a JS variable, titled message.
//  b) Assign “Hello World” to variable message
//   c) Display the message in alert box.

// var titled = "Hello World";
// alert(titled)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
// var name = "Jhone Doe";
// alert(name)
// var age = "15 years old";
// alert(age);
// var course = "Certified Mobile Application Development";
// alert(course)

// 5. Write a script to display the following alert using one JS variable: 

// alert('PIZZA\nPIZZ\nPIZ\nPI\nP')
// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email = "shoaibbilal101@gmail.com"
// alert("My Email address is " + email)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the book " + book)

// 8. Write a script to display this in browser through JS 
// var a = "Yah! I can write HTML content through Javascript"
// document.write(a)


// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)

// Ch: 3 VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
// var age = '20'
// alert("I am " + age + " years old")

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

// var N = "14"
// alert("You have visited this site " + N + " times")

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

// var birthYear = '1999'
// document.write("My birth year is " + birthYear + "<br/>Data type of my declared variable is number")

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


// var Visitors_name = "John Doe"
// var Product_title = "5 T-shirt(s)"
// document.write(Visitors_name + " ordered " + Product_title + "on XYZ Clothing store")


// ch 4 VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement. 

// var a, b, c;

// 2. Declare 5 legal & 5 illegal variable names. 

// illegal variables
// var product cost = 3.45;
// var P2_a%88$;
// var _9w;



// legalvariables
// var Nameofband;
// var $_;
// or
// var _$;
// var averageHumanIntelligence;
// var booHoo;


// 3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________   

// document.write("Rules for naming JS variables <br/><br/><br/>")
// document.write(" Variable names can only contain ,numbers,$ and _, For example $my_1stVariable<br/>")
// document.write(" Variables must begin with a letter,$ or _. For example $name, _name or name <br/>")
// document.write("Variable names are case sensitive <br/>")
// document.write("Variable names should not be JS Keywordz")


// ch:5 MATH EXPRESSIONS 

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

// var a = 3
// var b = 5
// var c = a + b
// document.write("Sum of 3 and 5 is " + c)

// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

// var a = 3
// var b = 5
// var c = a - b
// document.write("Sum of 3 and 5 is " + c)

// var a = 3
// var b = 5
// var c = a * b
// document.write("Sum of 3 and 5 is " + c)

// var a = 3
// var b = 5
// var c = a / b
// document.write("Sum of 3 and 5 is " + c)

// var a = 3
// var b = 5
// var c = a % b
// document.write("Sum of 3 and 5 is " + c)

// 3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
// MATH EXPRESSIONS | JAVASCRIPT 

// Page 2 of 9 

// after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”.


// var a;
// document.write("Value after variable declaration is: " + a + "<br/>")
// a = 5;
// document.write("Initial value: " + a + "<br/>")
// a = ++a;
// document.write("Value after increment is:" + a + "<br/>")
// a = a + 7;
// document.write("Value after addition is:" + a + "<br/>")
// a = --a;
// document.write("Value after decrement is: :" + a + "<br/>")
// a = a % 3;
// document.write("The remainder is :" + a + "<br/>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var movieticket = 600;
// ticketprice = movieticket * 5;
// document.write("Total cost of buy 5 tickets to a movie is " + ticketprice + "PKR")


// 5. Write a script to display multiplication table of any number in your browser. E.g 

// document.write("Table of 4" + "<br/>")
// for (var i = 1; i <= 10; i++) {
//     document.write("4" + "x" + i + "=" + 4 * i + "<br/>")
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
// Conversion Formulae

// var celsius = 25
// var fehrenhiet = (celsius * 9 / 5) + 32
// document.write(celsius + "C is" + fehrenhiet + "F" + "<br/>")
// var fehrenhietT = 70
// var celsiusT = (fehrenhietT - 32) * 5 / 9
// document.write(fehrenhietT + "C is" + celsiusT + "F" + "<br/>")

// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// MATH EXPRESSIONS | JAVASCRIPT 

// Page 5 of 9 

// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 

// var priceoneitem = 650
// var pricetwoitem = 100
// var quantityofoneitem = 3
// var quantityoftwoitem = 7
// var Shippingcharges = 100
// var totalcost = ((priceoneitem * quantityofoneitem)) + ((pricetwoitem * quantityoftwoitem)) + 100
// document.write(" Price of item 1 is " + priceoneitem + "<br/>")
// document.write("  quantity of item 1 is " + quantityofoneitem + "<br/>")
// document.write(" Price of item 2 is " + pricetwoitem + "<br/>")
// document.write(" quantity of item 2 is " + quantityoftwoitem + "<br/>")
// document.write("Shipping charges " + Shippingcharges + "<br/><br/>")
// document.write("Total cost of your order is  " + totalcost)

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

// var totalmarks = 980
// var marksobtained = 804
// var percentage = (marksobtained / totalmarks) * 100
// document.write("Total Marks: " + totalmarks + "<br/>")
// document.write("Marks obtained: " + marksobtained + "<br/>")
// document.write("Percentage: " + percentage)


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

// var USdollar = 10
// var saudiriyal = 25
// var dollartoPKR = USdollar * 104.80
// var riyaltoPKR = saudiriyal * 28
// var total = dollartoPKR + riyaltoPKR
// document.write("Total Currency in PKR: " + total)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

// var a = 5;
// var operations = ((a + 5) * 10) / 2
// document.write(operations)

// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.


// var currentyear = 2016;
// var birthyear = 1992;
// var age = currentyear - birthyear;
// document.write("Current Year: " + currentyear + "<br/>")
// document.write("Birth Year: " + birthyear + "<br/>")
// document.write("Your Age is : " + age + "<br/>")

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius = 20
// var circumference = (2 * 3.142 * 20)
// var area = 3.142 * radius * 2
// document.write("Radius of a circle is: " + radius + "<br/>")
// document.write(" The circumference is: " + circumference + "<br/>")
// document.write("The area is: " + area + "<br/>")

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

// var favorite_snack = "chocalate chip"
// var currentage = 15;
// var maximumage = 65;
// var estimatedamount = 3;
// var total = (maximumage - currentage) * 3
// document.write("Favorite Snack: " + favorite_snack + "<br/>")
// document.write("Current Age: " + currentage + "<br/>")
// document.write("Estimated Maximum Age: " + maximumage + "<br/>")
// document.write("Amount of snacks per day: " + estimatedamount + "<br/>")
// document.write("Amount of snacks per day: " + estimatedamount + "<br/>")
// document.write("You will need " + total + " chocolate chip to last you untill the ripe old age of " + maximumage)


// ch:6-9    MATH EXPRESSIONS

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
// var a = 10
// b = ++a
// document.write("Result: " + "<br/>")
// document.write("The value of a is : " + 10 + "<br/><br/>")
// document.write("***********************" + "<br/><br/>")
// document.write("The value of ++a is : " + a + "<br/>")
// document.write("Now the value of a is : " + a + "<br/><br/><br/>")
// document.write(" the value of a++ is : " + a + "<br/>")
// var b = a++
//     document.write(" the value of a is : " + 12 + "<br/><br/><br/>")
// document.write(" the value of --a is : " + 11 + "<br/>")
// document.write(" Now the value of a is : " + 11 + "<br/><br/><br/>")
// document.write(" the value of a-- is : " + 11 + "<br/>")
// document.write(" Now the value of a is : " + 10 + "<br/>")

// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;


// var a = 2,
//     b = 1;
// var result = --a - --b + ++b + b--
//     document.write(a + "<br/>")
// document.write(b + "<br/>")
// document.write(result + "<br/>")


// 3. Write a program that takes input a name from user & greet the user

// var name = prompt("Enter Your Name: ")
// alert("Your name is : " + name)

// 4.  5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var a = prompt("Enter Number: ")
// document.write("Table of " + a + "<br/>")
// for (var i = 1; i <= 10; i++) {
//     document.write(a + "x" + i + "=" + a * i + "<br/>")
// }

// 6. Take a) Take three subjects name from user and store them in 3 different variables.b) Total marks
// for each subject is 100, store it in another variable.c) Take obtained marks
// for first subject from user and stored it in different variable.d) Take obtained marks
// for remaining 2 subjects from user and store them in variables.e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


// var subject1 = prompt("Enter Subject one: ")
// var subject2 = prompt("Enter Subject two: ")
// var subject3 = prompt("Enter Subject three: ")
// var totalmarks = 100;
// var markssubject1 = prompt("Enter Subject one marks: ")
// var markssubject2 = prompt("Enter Subject two marks: ")
// var markssubject3 = prompt("Enter Subject three marks: ")
// var total = markssubject1 + markssubject2 + markssubject3
// var percentage1 = (markssubject1 / totalmarks) * 100
// var percentage2 = (markssubject2 / totalmarks) * 100
// var percentage3 = (markssubject3 / totalmarks) * 100

// document.write("Subject one is :" + subject1 + "Subject two is : " + subject2 + " Subject three is : " + subject3 + "<br/>")
// document.write("Subject one is :" +
//     markssubject1 + "Subject two is : " + markssubject2 + " Subject three is : " + markssubject3 + "<br/>")
// document.write("Total Marks: " + totalmarks + "<br/>")
// document.write("Total Subject  Marks: " + total + "<br/>")

// document.write(percentage1 + percentage2 + percentage3 + "<br/>")