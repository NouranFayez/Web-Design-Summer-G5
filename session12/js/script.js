// function statement


// function getName(){
//     return 'Nouran Fayez'
// }

// var fullName = getName()


// function expression

// var fullName = function (){
//     return 'Nouran Fayez'
// }


// console.log(fullName())


// arrow function

// var userName = ()=>{
//     return 'Tamer Fayez'
// }
// var userName = ()=> 'Tamer Fayez'
// var condition = ()=> 20 > 30

// var h = "str"
// var x = ()=> h == 'str'


// console.log(userName())
// console.log(condition())
// console.log(x())



///////////////////////// Array Methods

// var fName = "Zein"
// var lName = "Tamer"
// var age = 10
// var address = "Maadi"

// var user = ["Zein" , "Tamer" , 10 , "Maadi" ]


// var x = user[2]

// user[4]  = true
// // user[10] = 'student'

// user[user.length] = "nasr city"
// console.log(user);

// console.log(user.length)


// var courses = ['html' , 'css' , 'js']

// courses.push("bootstrap" , 10)
// courses.unshift(true , 20)

// courses.pop()
// courses.shift()
// courses.shift()



// console.log(courses)




var courses = ['html', 'css', 'bootstrap', 'js', 'ts', 'Angular']

//  splice(index , deletedCount , item/s) ==> add / remove item/s

courses.splice(2, 0, "React", 'Node') // add item/s

courses.splice(5, 2) // remove item/s

courses.splice(3, 1, 'Php', 'Laravel') // add / remove

// console.log(courses.includes('ghjghj'))

// console.log(courses.reverse())

// console.log(courses);

// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// console.log(courses[3]);
// console.log(courses[4]);


for (var i = 0; i < courses.length; i++) {
    // console.log(courses[i])
}

courses.forEach((item, index) => {
    // console.log(item)
    // console.log(index);
    // console.log(arr)

})


var nums = [10, 4, 20, 5, 100]

// nums.forEach((item , i)=>{
//     if(item > 20 ) console.log(i)
// })


var findElement = nums.find((item) => item > 20)
var findElement = nums.find((item) => item > 200) // undefined
var findElement = nums.find((item) => item > 10)
var findIndex = nums.findIndex((item) => item > 10)
var findIndex = nums.findIndex((item) => item > 200) // -1

var newArray = nums.filter((item) => item > 5)
var newArray = nums.filter((item) => item > 200)

// console.log(findElement)
// console.log(findIndex)
// console.log(newArray)

var mappedArray = nums.map(item => item * 2)
// console.log(mappedArray)
// console.log(nums);

// console.log(courses.map(item=>item+20))

// sort() , concat() , toString() , join() , slice()


//////////////////////////// Object

// var fName = "Zein"
// var lName = "Tamer"
// var age = 10
// var address = "Maadi"

// var user = ["Zein" , "Tamer" , 10 , "Maadi"  , 30 , 'nasr city' , 'ahmed' , false] 

var userInfo = {
    fName: 'Zein',
    lName: 'TAmer',
    age: 10,
    address: "maadi"
}
var userInfo2 = {
    fName: 'Marwa',
    lName: 'Ahmed',
    age: 20,
    address: "maadi"
}
var userInfo3 = {
    fName: 'Nada',
    lName: 'TAmer',
    age: 40,
    address: "maadi"
}
var userInfo4 = {
    fName: 'Mohamed',
    lName: 'TAmer',
    age: 40,
    address: "Nasr city"
}

console.log(userInfo.address)

userInfo.isGraduated = false
userInfo.lName = "Ahmed"
console.log(userInfo)

/// array of objects
var users = [
    {
        fName: 'Zein',
        lName: 'TAmer',
        age: 10,
        address: "maadi"
    },
    {
        fName: 'Marwa',
        lName: 'Ahmed',
        age: 20,
        address: "maadi"
    },
    {
        fName: 'Nada',
        lName: 'TAmer',
        age: 40,
        address: "maadi"
    },
    userInfo4
]



console.log(users.find(item => item.age == 20));
console.log(users.findIndex(item => item.fName  == "Marwa"));

users[users.findIndex(item => item.fName  == "Marwa")] = null

console.log(users)



//////////////////////


// var usersNumber = prompt('enter users number') // 3

// function addUser() name , id , balance 

// function editUserBalanceById ()  id , newBalance

// function deleteUserById() id

// console.table(users)


