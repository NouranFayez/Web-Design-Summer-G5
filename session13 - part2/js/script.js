// -- Dom ==> document object model



// var h1Elements = document.getElementsByTagName("h1") // HTMLCollection - array
// h1Elements[2].innerText = "Bootstrap"
// console.log();


// var h1 = document.getElementById('h1-element')

// var elements = document.getElementsByClassName('custom-class')

// elements.address = "Javascript"

// elements.forEach(item => {
//     item.innerText = "js"
// });

// for(var i = 0 ; i < elements.length ; i++){
//     elements[i].innerText = "Js"
// }


// console.log(elements)

// var item = document.querySelector('h1 span')
// var item = document.querySelector('.custom-class')
// var item = document.querySelector('.border .custom-class')
// var items = document.querySelectorAll('.border .custom-class')
// items.address = "Js"
// console.log(items)


// var h3 = document.getElementById('h3-element')
// var h3 = document.querySelector('#h3-element')

// h3.style.backgroundColor = "#eee"
// h3.style.color = "red"
// h3.style.padding = "2%"


// h3.className = "border border-primary"

// h3.classList.add("border" , "border-primary" , "border-4" , "p-2")

// h3.classList.remove('text-danger')
// h3.classList.toggle('text-danger')


// console.log(document.forms)
// console.log(document.images)
// console.log(document.title)
// document.title = "Js Session13"
// console.log(document.links)
// console.log(document.scripts)


// var img = document.getElementById('custom-img')
// console.log(img.src)

// img.width = "200"
// img.height = "200"
// // img.src= "images/2.jpg"


// function changeImage(){
//     if(img.src.endsWith('1.jpg')) img.src = "images/2.jpg"
//     else img.src = "images/1.jpg"
// }


function mouseEnter(element){
    // var ele = document.getElementById('custom-div')
    element.classList.add('bg-warning')
}

function mouseLeave(element){
    //  var ele = document.getElementById('custom-div')
    element.classList.remove('bg-warning')
}

function handleMouseEvent(element , type){
    (type == 'mouseenter') ?  element.classList.add('bg-warning') :  element.classList.remove('bg-warning')
}