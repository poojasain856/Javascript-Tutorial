//  1. Ways to print in javascript
       alert ("me");
        document.write("this is document write")
        console.log("Hello world");
        
        // 2. Javascript console API
        console.log("hello world", 4+6, "Another log");
        // console.warn("this is warning")
        //  console.error("This is an error");
       

         // 3. javascript Variables -  containers to store data value
         var number1 = 34;
         var  number2 = 56;
        console.log(number1 + number2);
        // 90 - output


        // 4. Data types in javascript
        //String
        var str1="this is a string";
        var str2='this is also a string';

         // output in console
         console.log(str2)
        // this is also a string
         console.log(str1)
        // this is a string

         
        //Numbers
        var num1 = 455;
        var num2 = 56.789;

        // output in console
        console.log(num1)
        455 
        console.log(num2)
        56.789


        //Objects
        var marks ={
            ravi:45, 
            subham:78,
            harry:99.977
        }
        console.log(marks)
        // {ravi: 45, subham: 78, harry: 99.977}


        //Booleans
        var a = true;
        var b = false;
        console.log(a,b);
    //    output // true false

    // var und = undefined;
    var und;
    console.log(und);
// undefined means value not defined in variable

var n=null;
console.log(n);
// emtpy 


//Datatypes in Javascript 
// At a very high level, there are two types of datatypes:
// 1.Primitive datatypes - undefined, null, number, string, symbol
// 2.Reference datatypes - Arrays and Objects 

var arr = [1,2,3,4,5]
console.log(arr)


//Operators in Javascript

var a = 34;
var b = 655;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);


//Assignment Operator
var c=b;
console.log(c);
c +=2; //c = c+2
console.log(c);
c *=2; //c = c*2
console.log(c);
c /=2; //c = c/2
console.log(c);
c -=2; //c = c-2
console.log(c);

//Comaprison operator
var x = 341;
var y = 659;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x > y);
console.log(x < y);


//Logical Operators
// Logical AND &&
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);


// Logical OR !!
console.log(true || true);
console.log(true ||false);
console.log(false || false);
console.log(false || true);

// Loginal NOT - turns true to false and false to true
console.log(!false);
console.log(!true);

// Javascript Functions
function avg(a,b){
    return a + b/2;
}

c1= avg(4,6);
c2= avg(14,16);
console.log(c1,c2);

//Conditionals in Javascript\
var age =34;
//single if statement
if(age > 8){
console.log("You are not a kid");
}



var age =34;
// if -else statement
if(age > 8){
console.log("You are not a kid");
}
else{
    console.log("You are a kid");
}



//If-else ladder
var age =33;
if(age < 18){
console.log("You cannot drive car");
}
else if (age >=18){
    console.log("You can drive a car");
}
else if (age <25){
    console.log("You are not eligible for marriage");
}
else if (age >= 25){
    console.log("You are eligible for marriage");
}
else {
    console.log("You are eligible for both drive a car and also marriage");
}

//Array Iteration - using  for loop
var arr = [1,2,3,4,5,6,7];
console.log(arr)
for(var i = 0;i<arr.length;i++){
console.log(arr[i])
}

//Array Iteration - using  for each loop
var arr = [1,2,3,4,5,6,7];
arr.forEach(function(element){
    console.log(element);
})

//
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

do{
console.log(arr[j]);
j++;
}while(j<arr.length);


//Break and Continue statement in javascript

var arr = [1,2,3,4,5,6,7];
// console.log(arr)
for(var i = 0;i<arr.length;i++){
    if(i==2){
        // break; - Break the iteration.
    continue;   //continue means cancel this iteration and continue.
    }
console.log(arr[i])
}

// Array Methods in javascript
let myArr = ["fan", "camera", 34, null, true];
console.log(myArr.length); //length() shows/prints the length of the array
myArr.pop(); // pop() removes the last element in array
myArr.push("pooja"); // push() adds the elements in array
myArr.shift(); // shift()  removes the first element in array
myArr.unshift("pooja"); //unshift() adds element in forst of array
console.log(myArr.unshift("Poonam")); // console.log() returns the new array's lenth 
console.log(myArr.join("*")); // join() add separtors in array elements.
console.log(myArr.splice("poo")); // delete/removes the elements by given value of array 
myArr.toString(); // convert the array elements in one string
myArr.sort(); // sorts the array elements in alphabetically()dictionary) arrgaed manner

// Strings() in javascript
let myString = "Pooja is a very very good girl";
console.log(myString.length); // displays the length of the strings
console.log(myString.indexOf("very")); //it returns the first occurence of string.
console.log(myString.lastIndexOf("very")); //it returns the last occurence of string.
console.log(myString.slice(1,3)); // prints the characters of a string
console.log(myString.replace("very","absolutely")); // replaces the first occurence element in a string

// Date methods in javascript
let myDate = new Date();
console.log(myDate.getDate()) ;
console.log(myDate.getDay()) ;
console.log(myDate.getMonth()) ;
console.log(myDate.getFullYear()) ;
console.log(myDate.getMinutes()) ;
console.log(myDate.getHours()) ;
 

// DOM - Document object model 
document.location // can be use to access ourHTML pages.
document.URL // shows the url
document.scripts // shows the script used in html pages
document.body // shows the body-contained details
document.title // displays page title
document.links // displays the links used in html pages
document.images // displays the image property used in pages
document.domain // displays the current domain where the output is showing

document.getElementById('click').click();
document.getElementById('click').style.border = '2px solid blue' // dynamically make changes in content using javascript and dynamic css
let elem = document.getElementById('click'); // getElementById denotes only one and unique id
console.log(elem);
let elemClass = document.getElementsByClassName("container"); // getElementsByClassName  denotes multiple elements
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].innerHTML //shows/displays the innerHTML tags of HTML pages
elemClass[0].innerText //returns the innerText of HTML pages
console.log(elem.innerHTML); //shows/displays the innerHTML tags of HTML pages
console.log(elem.innerText); //returns the innerText of HTML pages
console.log(elemClass[0].innerHTMl); //shows/displays the innerHTML tags of HTML pages on console
console.log(elemClass[0].innerText); //returns the innerText of HTML pages
tn=document.getElementsByTagName('div'); // adds the child element in 'div' 
console.log(tn);
createdElement=document.createElement('p'); // creates the element 'p'
createdElement.innerText="This is the created para"; // shows innerText of 'p' element
tn[0].appendChild(createdElement); // appends the child element
createdElement2=document.createElement('b'); //creates the element 'b'
createdElement2.innerText= "This is a created child"; // shows innerText of 'b' element(childElement content)
tn[0].replaceChild(createdElement2, createdElement); //replaces the child element
tn[0].removeChild(createdElement2); // removes child element


//Selecting using Query - mostly used in css for easy query
sel = document.querySelector('.container')
console.log(sel) //returns the firstcontainer div details
sel = document.querySelectorAll('.container') //returns all the div details
console.log(sel)


//Events in Javascript
function clicked(){
    console.log('the button was clicked'); // event shpws the button clicked
}
window.onload = function(){
    console.log("the document is loaded");// when we refresh the window this msg is showing
}

firstContainer.addEventListener('click',function(){  // adding an event 'click' - when click on the container shows the msg
    console.log("Clicked on Container")
})

firstContainer.addEventListener('mouseover',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    console.log("Mouse on Container");
})

firstContainer.addEventListener('mouseout',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    console.log("Mouse out of Container");
})

firstContainer.addEventListener('mouseup',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    console.log("Mouse down when clicked on Container");
})

firstContainer,addEventListener('click' , function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    console.log('the button was clicked'); // event shpws the button clicked
})


let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown',function(){  // adding an event 'mouseover' - when move mouse on the container shows the msg
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})

//Arrow functions or Lambda functions -  We use “=>” (arrow symbol) in the arrow function and we do not use the 'function' keyword. 

function summ(a,b){ // without arrow function
    return a+b;
}

// Or  //with arrow function
 summ=(a,b) =>{ // We can use this method when we want our code to be short and not call the function each time.
    return a+b;
 }


// // SetTimeout 
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>"
//     console.log("I am your log");
// }
// setTimeout(logKaro,3000); //used to schedule the time for certain action 
// setInterval(logKaro,3000); // used to repeat the schedule
// // SetInterval
// clr = setTimeout(logKaro,5000); //used to stop the schedule
// clr = setInterval(logKaro,5000); // used to stop the repeat the schedule 
// // use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


//Javascript local storage
localStorage.setItem('name', 'pooja'); //adding the name(element) and the value in local storage
localStorage // by this it shows the given above (name and value) is added
localStorage.clear() // make the local storage clear/empty
localStorage.getItem('name'); //fetch items from local storage by giving element
localStorage.removeItem('name'); // removes one item from local storage


//JSON - Javascript object notation 
//JSON is open standard file format which is used to exchange data. We can convert JSON into string and transport it and can create it as a javascript object
obj = {name:"pooja", length:1,  a:{this:'tha\ "t'}} //creates an object and JSON supports only double quotes
jso=JSON.stringify(obj); //jso is a string based JSON which is reasdy to transport
console.log(typeof jso); // shows jso details in console
typeof jso // shows the jso type
'string'
typeof obj // shows the obj type
'object'

parsed= JSON.parse(`{"name":"pooja","length":1,"a":{"this":"that"}}`)
console.log(parsed);

//Backticks - Template literals
a=34;
console.log('this is my $(a)')


// Date function
toLocalDateString() // it gives us language sensitive representation 



// Javascript Versions
