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

var userInfo = "My Name is " + firstName +"my age is "+ age
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

n+=5
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


var str = "string" ;
var num = 20 ;

// console.log(str == "string") // true
// console.log(num > 20) // false


console.log(str == "string"  && num > 20 && firstName == "Nouran") // false
console.log(str == "string"  && num >= 20 && firstName == "Nouran") // true

console.log(str == "ghjjbn"  || num >= 20 || firstName == "marwa") // true

console.log(!str == "string") 

console.log(typeof(str))
console.log(typeof(isGraduated))
console.log(typeof isGraduated )

// ternary operator (condition/s) ? true condition : false condition

// console.log('dghjkhh') ;

var r = 30 ;
(typeof r == "number" && str == "js") ? console.log('number') : console.log('not a number');



// false value - truthy value
var age = 30; //true
var age = 0; // false
var age = -0; // false
var age = ""; // false
var age = null ; // false
var age = false ; // false
var age = "hhjjjjkkk" ; // true
var age = true ; // true

var sum  // undefined // false
(!sum) ? console.log('30') : console.log('invalid age')


 
