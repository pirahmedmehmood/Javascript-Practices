//Array & loops
//Q-01
let multidiMensitional=[];
//Q-02
multidiMensitional=[[0,1,2,3],
                    [1,0,1,2],
                    [2,1,0,1],
                ];
//Q-03                
for (let i=0;i<=10;i++){
    console.log(i)
    let output=document.getElementById("output")
    output.innerHTML +=i +"<br>";
    
}
//Q-04
let num = prompt("Enter a number to show its multiplication table:");
let length = prompt("Enter length of multiplication table:");
document.write("<h3>Multiplication table of " + num + "</h3>");
document.write("Length " + length + "<br><br>");
for (let i=1;i<=length;i++){
    document.write(num+"x"+i+ "="+(num*i  + "<br>"))
}
//Q-05
let fruits=["apple","banana","mango","orange","strawberry"];
for (let i=0;i<fruits.length;i++){
    console.log(i+"="+fruits[i]);
    
}
//Q-06

document.write("<b>a. Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : ""));
}

document.write("<br><br>");


document.write("<b>b. Reverse counting:</b><br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : ""));
}

document.write("<br><br>");


document.write("<b>c. Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : ""));
}

document.write("<br><br>");


document.write("<b>d. Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : ""));
}

document.write("<br><br>");


document.write("<b>e. Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k" + (i < 20 ? ", " : ""));
}
//Q-07
let userInput=prompt("Welcome to ABC Bakery, What do you want?")
let A=["cake","apple pie","cookie","chips","patties"];
userInput=userInput.toLocaleLowerCase()
if (A.includes(userInput)){
    alert("Yes its availabe in the Bakery:)")

}else{
    alert("We are Sorry its noat avialble in the Bakery:(")
}
//Q-08
let arrayNum = [21, 52, 36, 45, 87, 98];
let largest = arrayNum[0];

for (let i = 1; i < arrayNum.length; i++) {
   if (arrayNum[i] > largest) {
        largest = arrayNum[i]; 
   }
}

console.log("The largest number is:", largest);
//Q-09
let smallest = arrayNum[0]; 

    for (let i = 1; i < arrayNum.length; i++) {
      if (arrayNum[i] < smallest) { 
        smallest = arrayNum[i]; 
      }
    }
    console.log("The Samllest Number is:",smallest);
    