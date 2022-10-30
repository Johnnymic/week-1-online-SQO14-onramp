
function fizzBuzz(num) {
let number=num
if(num/3) {
   return"fizz" 
}
else if(num/5){
   return "Buzz" 
}
else if(number/3 && number/5){
    return "fizzBuzz"
}
else{
    return " "
}
    
}
console.log(fizzBuzz(3));




module.exports = fizzBuzz
