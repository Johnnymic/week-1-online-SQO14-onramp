function calculateGrade(marks) {
 
 function getGrade(num1,num2,num3){
 let avg= (num1 + num2 +num3)/3
 
 if(avg<50)
 {return "F"};
  if(avg>= 50 &&  avg <=59) 
 {return "E"}
 
 if(avg>= 60 &&  avg <=69){return "D"}

 if(avg>= 70 &&  avg <=79) return "C"
  
 if(avg>= 80 &&  avg <=89) return "B"
 
  else{
      return "A ";
  }
  
}
console.log(getGrade([80,0,10]))
console.log(getGrade( [59, 80, 40, 2, 77]));
 
 }
  module.exports =calculateGrade
