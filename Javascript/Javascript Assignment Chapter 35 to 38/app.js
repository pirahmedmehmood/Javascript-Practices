//Q-01
function onDate(){
    document.write(new Date())
}
//Q-02
function yourName(){
    let firstName=prompt("Enter your first Name:")
    let lastName=prompt("Enter your last Name:")
    alert("welcome"+"  "+firstName+lastName)
}
//Q-03
// function addNum(){
//   let aFirst=Number(prompt("Enter your first Number"))
//   let aSec=Number(prompt("Enter your last number"))
//   return aFirst + aSec
// }
// console.log(addNum());
//Q-04
function calculator(num1, num2,operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        return "Invalid operator";
    }

    document.write("Result: " + result);
    return result;
}
console.log(calculator(150,55,"*"));
//Q-06
function clc(newn,newn2){
 for (let i=newn;i<=newn2;i++){
  
 }
}
clc(1,5)

//Q-07
function mukt(nem1,newm2){
  for (let i =nem1;i<=newm2;i++){
    console.log(i);
  }
   
    
}
mukt(1,10)
