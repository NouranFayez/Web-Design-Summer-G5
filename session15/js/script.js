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

if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        // document.querySelector('.owl-carousel')
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            },
            navText: ['<i class="fa-solid fa-arrow-left text-primary"></i>', '<i class="fa-solid fa-arrow-right"></i>']
        });
    });
}


let design = document.querySelectorAll('[data-filter=design]')
let marketing = document.querySelectorAll('[data-filter=marketing]')
let filtersTab = document.getElementsByClassName('filter-cards')
console.log(design)


let myForm = document.getElementById('myForm')

let handleError = (element, msg = "") => {
    element.nextElementSibling.innerText = msg
}

let nameValidation = (element) => {
    let inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "enter at least 3 character")
    else handleError(element)

}

let emailValidation = (element) => {
    // nouran_ahmed269@hotmail.com
    // $%*_-&! ==> special characters
    // console.log(element.value)
    // let regExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

    // https://www.mailercheck.com/articles/email-validation-javascript
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log(regExp.test(element.value));
        (!regExp.test(element.value)) ?
        handleError(element, "please enter a valid email")
        : handleError(element)
}

let passwordValidation =(element)=>{
    // let d = new Date()
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(element.value));
    (!strongRegex.test(element.value))?
     handleError(element , 'please enter at least 1 lowercase letter , 1 uppercase letter .......')
    : handleError(element)
}



myForm.addEventListener('input', function (e) {
    // console.log(e)
    // console.log(e.target.id)
    if (e.target.id == "userName") {
        // console.log(e.target.value.length)
        nameValidation(e.target)
    }
    else if (e.target.id == 'userEmail') {
        emailValidation(e.target)
    }
    else if (e.target.id == 'userPassword') {
        passwordValidation(e.target)
    }
})



