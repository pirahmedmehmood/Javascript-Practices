let we=document.getElementById("we").innerHTML


// // ✅ Quick Task 1:
// alert("Welcome to Javascript")
// ✅ Quick Task 2:
// var country="Pakistan"
// Quick Task 3:
// let number=450
// Quick Task 4:
// Batāo: kya yeh variable legal hai ya illegal?
// $firstName
//Answer:"Legal Hai"
// Quick Task 5:
// Solve in JS style:
// 10 * 3 + 2 = ?
// let solve;
// solve=10*3+2
// console.log(solve);
// Quick Task 6:

// var n = 7; n++;
// n ka final value kya hoga?
//n ki final value 8 hogi 
// var n=7;n++;
// console.log(n);
// Quick Task 7:

// 2 + 3 * 4 = ?
// Parentheses ke saath: (2 + 3) * 4 = ?
// PArantheses k Saath yeh hoga 20 hi hoga
// var ahm=(2 + 3) * 4 
// console.log(ahm);
// Quick Task 8:

// "Your age is " + 20 ka output kya hoga?

// let age=20
// console.log("Your age is "+age);

// Quick Task 9:

// Prompt likho jo user se city puchay.

// let city=prompt("Enter your City Name")
// console.log(city);

// Quick Task 10:

// Condition likho:
// Agar number 10 se bara ho to alert "Big number".
// let num=prompt("Enter your Number:")
// if (num>10){
//     alert("Big Numbers")
// }else if(num<=10){
//     alert("Small Numbers")
// }
// else{
//     alert("Please Enter a valid number")
// }

// ⚡ Task 11:

// 5 == "5" → true ya false?
// console.log(5=="5");
// console.log(5==="5");
// console.log(5!=="5");
// console.log(5!="5");

// ⚡ Task 12:

// Condition banao:

// marks ≥ 80 → "A"

// marks ≥ 60 → "B"

// warna → "Fail"
// let marks=prompt("Your MArks")
// if (marks>=80){
//     console.log("Your Grade is A");
    
// }else if (marks>=60){
//     console.log("Your Grade is B");
    
// }else if(marks<60 || marks>0){
//     console.log(("you are Fail"));
    
// }
// else{
//     alert("Please Enter your marks")
// }
// ⚡ Task 13:

// Output kya hoga?

// "apple" > "App"
// console.log("apple ">"Apple");

// ⚡ Task 14:

// Kya yeh true hai?

// (5 > 3 && 2 > 1)
//Yes
// console.log((5 > 3 && 2 > 1));

// ⚡ Task 15:

// Agar age > 18 aur gender == "male" ho to alert("Allowed")
// let age;
// let gender;
// if (age>18 && gender=="male"){
//     console.log("You are Allowed");
    
// }else{
//     console.log("You are not allowed");
    
// }

// ⚡ Task 16:

// Array ka second element print karo.
// let arr=["red","green ","blue"]
// console.log(arr[1]);
// ⚡ Task 17:

// Iska length kya hoga?

// var a = [10, 20, 30];
// a.push(40);
// console.log(a.length);
//Mujhe lagta hai k iski length hogi 3 kaun k push to add kar raha hai na is liye
// var a = [10, 20, 30];
// a.push(40);
// console.log(a.length);
//Main ghalat tha iski length 4 aayi hai kaun k main length ko index number samajh raha tha
// ⚡ Task 18:

// Array:

// ["Red", "Blue"]


// Index 1 par "Green" insert karo.

// let array=["red","blue"]
// array.splice(0,1,"green")
// console.log(array);


// ⚡ Task 19:

// Loop likho jo 1 se 5 print kare.

// for (let i=0;i>5;i++){
//     console.log(i);
    
// }

// Task for Chapter 21:

// "hello world" ko uppercase me convert karo.

// "JAVASCRIPT" ko lowercase me convert karo.

// Apni original string ko modify karke save karo aur print karo.

// let uppe="hello world"
// console.log(uppe.toUpperCase());
// let low="JAVASCRIPT"
// // console.log(low.toLowerCase());
// Task 22:

// "JavaScript" ka length print karo

// "JavaScript" me first 4 letters extract karo

// let js="Javascript"
// console.log(js.length);
// let js2="JAvascript"
// console.log(js2.slice(0,4));

// Task:

// "I love JS" me "love" ka index find karo

// let js3="I love Js"

// console.log(js3.indexOf("J"));

// Task: "Hello" ka 1st character print karo
// let jss="Hello"
// // console.log(jss.charAt(0));
// Task: 4.7 ka round, floor, ceil print karo
// console.log(Math.random(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.7));

// Task: Random number between 0-10 generate karo
// console.log(Math.floor(Math.random(9)));
// Task: "45.67" ko number me convert karo (integer aur float dono)
// console.log(parseInt(45.67));
// console.log(parseFloat(45.67));

// let str=200
// console.log(String(str));
// let num="200"
// console.log(Number(num));
// let rand=Math.random()
// console.log(rand);
// let rano=Math.floor(Math.random()*9)+1
// console.log(rano);
// let pass=["a","b","c","d"]
// let num=["%","&","@"]
// let fin=Math.floor(Math.random()*5)+pass+num
// console.log(fin);

// let str="200"
// let num=Number(str)
// console.log(num);

// let num = 3.14159
// console.log(num.toFixed(3));
// console.log(num.toFixed(5));
// console.log(new Date());

// let date=new Date(10,5,2024)
// console.log(date.getFullYear());

// Task: Current month, day, year print karo.

// let now=new Date()
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMilliseconds());
// console.log(now.getSeconds());
// // console.log(now.getFullYear());
// Task: Apni birth date ka Date object banao.
// let d=new Date(2008,11,29)
// console.log(d.getFullYear());


// let now=new Date()
// now.setFullYear(2035)
// console.log(now);
// Task: “Hello Ahmed” print karne wali function banao.
// let newly = function ( ){
//   alert ("MAin chal raha hoon")
// }
// newly()

// Task: Name argument accept karke print karo.
// function greet(name){
//    return name
// }console.log(
// // greet("ahmed"));
// Task: 2 numbers ka sum return karo.
// function greet(a,b){
//     return a+b
// }
// console.log(greet(54,99));
// let last=10;
// function now(a,b,j){
//     j=last
//    let first=a+b
//    let final=first+last
//    return final
// }
// console.log(now(14,66,));
// // console.log(first);
// //is main jo first hai woh agar ap console kar rahe ho to woh nhi aayega aisa kaun kaun woh local variable hai function ka 
// console.log(last);
// magar agar ap yahan dekhin to maine last ko console karaya to woh ho raha hai is liye k yeh ek global variable hai 
// let user=3
// let usernum;
// switch(user){
//     case 1:
//    usernum="january"
//     break;
//     case 2:
//         usernum="february "
//         break;
//         case 3:
//           usernum="march"
//             break;

//             default:
//                usernum="Invalid Month"
// }
// console.log(usernum);



