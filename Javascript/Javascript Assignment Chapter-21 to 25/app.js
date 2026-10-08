//Chapter 21 to 25
//Q-01
let fisdrstName=prompt("Enter your first Name")
let lassxtName=prompt("Enter your last Name")
let fulsxlName=fisdrstName+lassxtName
console.log(fulsxlName);
//Q-02
let userMobile=prompt("Eneter your Favourite mobile phone model:")
document.write("My Favourite phone is:"+" "+userMobile)
document.write("Length is:"+" "+userMobile.length)
//Q-03
let programOf=["P","a","k","i","s","t","a","n","i"];
console.log(programOf.slice(7,8));
document.write("String:"+programOf)
document.write("Index of 'n' is :"+programOf.slice(7,8))
//Q-04
let nweProgram="HEllo World"
console.log(nweProgram.slice(9,10));
document.write("String:"+nweProgram)
document.write("Index of 'l' is:"+nweProgram.slice(9,10)+"  "+7)
//Q-05
let charaCter="Pakistani"
console.log(charaCter.charAt(3));
//Q-06
let firstName=prompt("Enter your first Name")
let lastName=prompt("Enter your last Name")
let fullName=firstName+lastName
console.log(fullName);
//Q-07
let replacerName="Hyderabad"
console.log("City:"+replacerName);
replacerName=replacerName.replace("Hyderabad","Islamabad")
console.log("After Replacement:"+replacerName);
//Q-08
let message ="Ali and Sami are best friends. They play cricket and football together."; 
console.log(message);
message=message.replaceAll("and","&")
console.log("After Replacement:"+message);
//Q-09
let stringNumber="472";
console.log("VAlue:"+stringNumber);
console.log("Type:"+typeof(stringNumber));
stringNumber=Number(stringNumber)
console.log("VAlue:"+stringNumber);
console.log("Type:"+typeof(stringNumber));
stringNumber=stringNumber.toString()
console.log("VAlue:"+stringNumber);
console.log("Type:"+typeof(stringNumber));
//Q-10
let userCapital=prompt("Enter your value to convert into Capital:")
console.log(userCapital.toUpperCase());
//Q-11
let userSmall=prompt("Enter your value to convert into Samll:")
console.log(userCapital.tolowerCase());
//Q-12
let numerConvert=35.36 
console.log(numerConvert);
console.log(typeof(numerConvert));

numerConvert=numerConvert.toString()
console.log(numerConvert);
console.log(typeof(numerConvert));
//Q-13 
let userName=prompt("Enter your user Name:")
if (userName==33 || userName== 44 || userName==46 || userName==64){
    alert("Please Enter a Valid User NAme:")
} else{
    alert("User Name is Coreect")
}
//Q-14
let A = ["cake", "apple pie", "cookie", "chips" , "patties"]
let userItem=prompt("Enter Your Item Name:")
userItem=userItem.toLowerCase()
if (A.includes(userItem)){
    alert("This Item is Available")
}else{
    alert("This Item is not available")
}
//Q-15
let userPassword = prompt("Enter Your Password:");

let firstChar = userPassword.charAt(0);
let hasLetter = /[a-zA-Z]/.test(userPassword); // check alphabets
let hasNumber = /[0-9]/.test(userPassword);    // check numbers

if (userPassword.length < 6) {
  alert("Password must be at least 6 characters long!");
} 
else if (!isNaN(firstChar)) {
  alert("Password should not start with a number!");
} 
else if (!hasLetter || !hasNumber) {
  alert("Password must contain both alphabets and numbers!");
} 
else {
  alert("Password is valid!");
}
//Q-16
let university="University of Karachi"
university=university.split("")
console.log(university);
document.write(university )
//Q-17
let country="Pakistan"
console.log(country);
console.log(country.lastIndexOf("n"));
//Q-18
let text="The quick brown fox jumps over the lazy dog"
text=text.toLowerCase()
let count=(text.match(/the/g) || [].length)
console.log(count);
