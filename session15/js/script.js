//// var let const
// BOM ==> browser object model (window)
// DOM ==> document object model (document)


// console.log(age) // not defined

// console.log(firstName) // undefined
// console.log(lastName) 
// console.log(fullName)

// var firstName = "Nouran"
// var firstName = 30

// let lastName = "Ahmed"
// lastName = "ddddd"
// let lastName = 20

// console.log(lastName)
// const fullName = "Nouran Ahmed Fayez"
// fullName = 20
// const fullName 

// console.log(fullName)


// function getSum(){
//     let num2 = "100"
//     if(true){
//         var num = 20
//         let num2 = 30
//          console.log(`num2 in the block scope ==> ${num2}`)

//     }
//     console.log(num)
//     console.log(`num2 in the function scope ==> ${num2}`)
// }

// getSum()

// console.log(num)

// address = "nasr city"

// jquery ==>  write less do more

$(document).ready(function(){
    // document.querySelector('.owl-carousel')
  $(".owl-carousel").owlCarousel({
    items : 2 ,
    margin: 30,
    loop:true,
    nav : true,
    responsive: {
         0:{
            items:1
        },
        800:{
            items:2
        }
    },
    navText : [ '<i class="fa-solid fa-arrow-left text-primary"></i>' , '<i class="fa-solid fa-arrow-right"></i>' ]
  });
});


let design = document.querySelectorAll('[data-filter=design]')
console.log(design)

