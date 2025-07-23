var inputElement = document.getElementById('name-input')

// var input = document.getElementsByTagName('input')


// inputElement.addEventListener('input' , ()=>{}) // eventType , function
inputElement.addEventListener('input', function () {
    // console.log('typing')

    // console.log(input)

    // console.log(inputElement.value)
    // console.log(inputElement.nextElementSibling)
    // console.log(inputElement.previousElementSibling)
    // console.log(inputElement.parentElement)
    inputElement.nextElementSibling.innerText = inputElement.value
}) // eventType , function






// var scrollDiv = document.getElementById('scroll-div')

// scrollDiv.addEventListener('scroll', (e) => {
//     // console.log(e)
//     if (e.target.scrollTop > 200) scrollDiv.classList.add('text-danger')
// })


// var topBtn = document.getElementById('top-btn')
// window.addEventListener('scroll', () => {
//     console.log('scrolling')
//     console.log(topBtn)
//     if (document.documentElement.scrollTop > 200) topBtn.classList.remove('d-none')
//     else topBtn.classList.add('d-none')
// })


// var boxContainer = document.getElementById('box-container')

//     // < div class="card w-50 p-2" >
//     //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga nobis dolorem, error nemo consequuntur vitae repudiandae quae quod nisi.</p>
//     //         </div >

// var div = document.createElement('div')
// div.classList.add('card' , 'w-50' , 'p-2' , 'text-primary')
// var p = document.createElement('p')
// p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga nobis dolorem, error nemo consequuntur vitae repudiandae quae quod"



// div.innerHTML = `<h2 class="text-danger">Javascript</h2>`

// // div.appendChild(p)
//  console.log(div)
// //  boxContainer.appendChild(div)
//  boxContainer.prepend(div)
// //  console.log(p)


var users = []


var myForm = document.querySelector('#myForm')
var container = document.getElementById('container')
myForm.addEventListener('submit', (e) => {
    // console.log('submitting')
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.elements[0].value)

    var user = {
        name: e.target[0].value,
        email: e.target.elements[1].value
    }
    users.push(user)
    localStorage.setItem('users' , JSON.stringify(users))
    // console.table(users)
    drawElement()

})
// myForm.addEventListener('input')

var editItem = (i)=>{
     var p = prompt('enter new name')
        users[i].name = p

        console.table(users)

        drawElement()
}
var drawElement = () => {
    container.innerText = ""
    console.log(users)
    users.forEach((item , i)=>{
    var div = document.createElement('div')
    div.classList.add('alert' , 'alert-primary')
    var h2 = document.createElement('h2')
    h2.innerText = item.name
    var editBtn = document.createElement('button')
    editBtn.classList.add('btn' , 'btn-success')
    editBtn.innerText="Edit Name"

    editBtn.addEventListener('click' , function(){
        console.log(i)
       editItem(i)
    })
    
    div.appendChild(h2)
    div.appendChild(editBtn)
    container.appendChild(div)
    })

 

}

if(localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
    console.log(users)
    drawElement()
}

usersArray = [
    {
        firstName : 'tamer',
        address : 'Nasr city'
    },
      {
        firstName : 'marwa',
        address : 'Nasr city'
    },  {
        firstName : 'zein',
        address : 'Nasr city'
    }
]


// localStorage.setItem("name" , "Nouran")
// localStorage.setItem("address" , "Nacr city")
// localStorage.setItem("age" , "31")

// console.log(localStorage.getItem('address'))



var id = [1,5,'dffgh']
// console.log(id.toString())

// console.log(JSON.stringify(usersArray))

// localStorage.setItem('users' , JSON.stringify(usersArray))

// console.log(localStorage.getItem('users'))

// var arr = JSON.parse(localStorage.getItem('users'))


// arr.push({name : 'ahmed' , address :'maadi'})

// console.log(arr)

// localStorage.removeItem('age')

// console.log(localStorage.getItem('job'));


// sessionStorage.setItem('name' , 'Tamer')
// sessionStorage.setItem('address' , 'Maadi')
// sessionStorage.setItem('age' , '40')




var counter = document.getElementById('counter')


var i = 0

var s = setInterval(()=>{
   i+=10
//    console.log(i)
   counter.innerText=i

    if(i == 150) clearInterval(s)
} , 500) // function , time

var s2 = setInterval(()=>{
//    i+=10
//    console.log(i)
//    counter.innerText=i
} , 500) // function , time


console.log(s)
console.log(s2)

setTimeout(() => {
    console.log('javascript')
}, 1000);

