var firstName = "zein"
var obj = {
    firstName : 'Marwa',
    lastName : 'Mohamed',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    addresses : function(){
        return {
            homeAddress : 'Nasr city',
            officeAddress : 'October',
            otherAddres: function(address){
                return address
            }
        }
    }
}


// console.log(obj.fullName())
// console.log(obj.addresses().officeAddress)
// console.log(obj.addresses().otherAddres('maadi'))


//////////// string Methods

var txt = "         Lorem ipsum dolor Lorem sit amet             "

// console.log(txt.length)
// console.log(txt[0])

// for(var i = 0 ; i < txt.length ; i++){
//     console.log(txt[i])
// }

// console.log(txt.startsWith('lorem'))
// console.log(txt.endsWith('lorem'))
// console.log(txt.endsWith('amet'))
// console.log(txt.includes('dolor'))
// console.log(txt.indexOf('Lorem'))
// console.log(txt.indexOf('js'))
// console.log(txt.replace('Lorem' , 'Javascript'))
// console.log(txt.replaceAll('Lorem' , 'Javascript'))
// console.log(txt.trim())
// NaN ==> Not a Number 

// var t = "fghjjk"

// console.log(isNaN(t)) // value


/////////// Number Methods

// var p = prompt('enter your age')

// console.log(p)
// console.log(Number(p))
// console.log(parseInt(p))
// console.log(parseFloat(p))
// var h = +p
// console.log(h)


// console.log(Math.random()*100)

// var k = 2.9
// console.log(k)
// console.log(`round ${Math.round(k)}`)
// console.log(`ceil ${Math.ceil(k)}`)
// console.log(`floor ${Math.floor(k)}`)

// console.log(Math.ceil(Math.random()*100))

// console.log(Math.max(2, 100 , 5 , 40))
// console.log(Math.min(2, 100 , 5 , 40))

// console.log(Math.trunc(10.7))
// console.log(Math.abs(-10))




///////////////////////// Date 

var d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) /// 0 : 11

var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

console.log(mS[d.getMonth()])
console.log(d.getDate())
console.log(d.getDay()) // 0 : 6
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
// switch (d.getMonth()) {
//     case 0: console.log('Jan')
        
//         break;
//  case 1: console.log('Feb')
        
//         break;
//          case 2: console.log('Mar')
        
//         break;
//     default:
//         break;
// }












