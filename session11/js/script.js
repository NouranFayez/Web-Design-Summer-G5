console.log('web design')

// var let const

// var firstName = 'Nouran' 

// var age = 31

var isGraduated = true


// console.log(firstName)
// console.log(age)
// console.log(isGraduated)


var r

// console.log(r)

var h = null

// console.log(null)
age = 10

// console.log(age)

age = "text"

// console.log(age)

var j = ""


// return value ==> string , null 
// var p = prompt("enter your name")

// console.log(p)

var x = 10
var y = 30

// Mathematical operators (+ - / * ** % ++ --)
var k = x + y

var firstName = 'Nouran'
var lastName = "Fayez"

var fullName = firstName + " " + lastName
// template string 
var fullName = `${firstName}
${lastName}`

var userInfo = `My Name is ${firstName} 
my age is ${age}`

var userInfo = "My Name is " + firstName + "my age is " + age
console.log(userInfo)

var l = 20
var s = "str"

var y = l / s // NaN ==> Not a Number

console.log(y)


// ++ increment 

var w = 100
// console.log(w++)
// console.log(w)

// console.log(++w)

// -- decrement

// console.log(w--)
// console.log(w)

// console.log(--w)

// Assignment Operator (+= , -= , *= , /= , %=)

var n = 10
// n = n+5

n += 5
// console.log(n)

//  comparison operator (< > <= >= == === != !==) ==> return boolean type


var h = 20
var k = "20"

// console.log(h >= k)

// console.log(h < n)

// console.log(h == k) // value
// console.log(h === k) // value - type


// console.log(h != k)
// console.log(h !== k)


// logical operator (&& || !)


var str = "string";
var num = 20;

// console.log(str == "string") // true
// console.log(num > 20) // false


// console.log(str == "string"  && num > 20 && firstName == "Nouran") // false
// console.log(str == "string"  && num >= 20 && firstName == "Nouran") // true

// console.log(str == "ghjjbn"  || num >= 20 || firstName == "marwa") // true

// console.log(!str == "string") 

// console.log(typeof(str))
// console.log(typeof(isGraduated))
// console.log(typeof isGraduated )

// ternary operator (condition/s) ? true condition : false condition

// console.log('dghjkhh') ;

var r = 30;
(typeof r == "number" && str == "js") ? console.log('number') : console.log('not a number');



// false value - truthy value
var age = 30; //true
var age = 0; // false
var age = -0; // false
var age = ""; // false
var age = null; // false
var age = false; // false
var age = "hhjjjjkkk"; // true
var age = true; // true

var sum  // undefined // false
// (!sum) ? console.log('30') : console.log('invalid age')



// if statment 


// if(condition){
//     true code 
// }
// else {
//     false code
// }

// var p = prompt('enter your name')

// if (p == "marwa"){

//     var fName = prompt('enter your full name')
//     console.log(fName)
// }

// else console.log('invalid user')

// var job = prompt('enter your job')

// if (job == 'eng') console.log('engineer')
// else if (job == 'doc') console.log('doctor')
// else if (job == 'dev') console.log('developer')
// else console.log('invalid job')


// if(job == 'eng') console.log('engineer')
//  if(job == 'doc') console.log('doctor')
//  if(job == 'dev') console.log('developer')
// else console.log('invalid job')
// eng ==> engineer
// doc ==> doctor
// dev ==> developer


// if (job != null && job != "") {
//     if (job == 'eng') console.log('engineer')
//     else if (job == 'doc') console.log('doctor')
//     else if (job == 'dev') console.log('developer')
//     else console.log('invalid job')
// }
// else {
//     console.log('please enter your job')
// }


// switch case 

// switch(variable){
// case 1 : code ..
// case 2 : code ..
// case 3 : code ..
// default : code
// }

// var job = prompt('enter your job')
// var job = 30


// strict condition ===
// switch (job) {
//     case "eng":
//         console.log('engineer')
//         break
//     case "dev":
//         console.log('developer')
//         break
//     case "doc":
//         console.log('doctor')
//         break
//     case "30" :
//     case 30 :     
//           console.log('num = 30') 
//           break 
//     default: console.log('invalid job')
// }



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(variable ; condition ; increment/decrement){
    // code ...
// }


// var start = 1 
// var end = 10

// for(var i = start ; i <= end ; i++ ){
//     if(i == 8) break
//     else if(i == 3) continue
//     else console.log(i)
// }



// function functionName(){
//     code ...
// }

// functionName()

function sum(num1 , num2 , num3){
    console.log(num3)
    // console.log(num1 + num2)

    return num1 + num2 + num3
}

// sum(10 , 30)
// sum(3 , 6)
// sum(10 , 100)
// sum(5 , 8)
// sum(40 , 10)
// sum(30 , 100)

prompt("enter your name" , 'nouran')

var result = sum(100 , 50  )

console.log(result)

// var fullName2

// function getFullName(){
//     var fName = prompt('enter your first name')
//     var lName = prompt('enter your last name')

//     fullName2 = `${fName} ${lName}`

// }


// getFullName()
// console.log(fullName2)




//// looping(start , end , breaknum , contNum)
// loopin(start , end , break)

