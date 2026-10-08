//Q-01 
let currentDate=new Date();
console.log("The Current Date is : ",currentDate);
//Q-02
let today=new Date();
let usingMonth=today.getMonth();
let monthName=["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"]
let currentMonth=monthName[usingMonth]
console.log("Current Month : ",currentMonth);
//Q-03
let usingDay=today.getDay();
let dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let currentDay=dayName[usingDay]
console.log("Current Day : ",currentDay);
//Q-04
if (dayName=="Friday" || dayName=="Saturday" || dayName=="Sunday"){
    alert("its funday")
}
//Q-05
let curentdate=today.getDate()
if(curentdate<15){
    console.log("First fifteen Days of the month");
    
}else{
    console.log("last fifteen Days of the month");
}
//Q-06
let now=new Date()
console.log(now);

minutesSince= Math.floor(now.getTime()/60000)
console.log("Miliseconds",minutesSince);
//Q-07
// let curentAlert=new Date()
// let rightNow=curentAlert.getHours()
// // console.log(rightNow);
// if (rightNow<12){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

//Q-08
let laterDate=new Date(2020,11,31)
console.log(laterDate);
//Q-09
let dateRama=new Date( 2024,5,18)
let rightDate=new Date()
let final=rightDate-dateRama
console.log(final);
//Q-10
let pastDate=new Date(2015,0,1);
let inDate=new Date()
let totalDate=inDate-pastDate
totalDate=totalDate/1000
console.log(Math.floor(totalDate));
//Q-11
let dateObj=new Date()
dateObj.setHours(dateObj.getHours()+1)
document.write("Date object:",dateObj ,"<br>")
document.write("Hour Away:",dateObj.getHours())
//Q-12
let dateYear=new Date()
dateYear.setFullYear(dateYear.getFullYear()-100)
console.log(dateYear);
//Q-13
let yourAge=prompt("Enter your Age?")
let toYear=new Date()
let totaYear=toYear.getFullYear()
let totalBirth=totaYear-Number(yourAge)
alert("Your Birth year is"+" "+totalBirth)
console.log(totalBirth);
//Q-14
// let customerName = prompt("Enter Customer Name:");

//         // Step 2: Current Month
//         let today = new Date();
//         let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//         let currentMonth = monthNames[today.getMonth()];

//         // Step 3: Number of units and charges per unit
//         let units = Number(prompt("Enter number of units:"));
//         let chargesPerUnit = 16;  // Example rate per unit

//         // Step 4: Net Amount Payable
//         let netAmount = units * chargesPerUnit;
//         netAmount = netAmount.toFixed(2); // rounded to 2 decimals

//         // Step 5: Late Payment Surcharge
//         let latePaymentSurcharge = 350;

//         // Step 6: Gross Amount Payable
//         let grossAmount = Number(netAmount) + latePaymentSurcharge;
//         grossAmount = grossAmount.toFixed(2);

//         // Step 7: Display the bill in browser
//         document.write("<h1>K-Electric Bill</h1>");
//         document.write("Customer Name: <b>" + customerName + "</b><br>");
//         document.write("Month: <b>" + currentMonth + "</b><br>");
//         document.write("Number of units: <b>" + units + "</b><br>");
//         document.write("Charges per unit: <b>" + chargesPerUnit.toFixed(2) + "</b><br>");
//         document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
//         document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge.toFixed(2) + "</b><br>");
//         document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");


