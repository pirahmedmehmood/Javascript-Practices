//Q 01
let itemsArray = [
    { name: "Juice", price: 50, quantity: 3 },
    { name: "Cookie", price: 30, quantity: 9 },
    { name: "Shirt", price: 880, quantity: 1 },
    { name: "Pen", price: 100, quantity: 2 },


]
console.log(itemsArray);

for (let i = 0; i < itemsArray.length; i++) {
    let totalItems = itemsArray[i]
    let totalMul = totalItems.price * totalItems.quantity
    console.log("The total Price of " + itemsArray[i].name + " is " + totalMul);
}

//Q 02
let firsUser = {
    Name: "Rashid",
    email: "rashid@gmail.com",
    password: "Rashid" + 1234,
    age: 22,
    gender: "male",
    city: "Karachi",
    country: "Pakistan",

}
console.log(firsUser);

console.log("age", "age" in firsUser);
console.log("country", "country" in firsUser);
console.log("firstName", "firstName" in firsUser);
console.log("lastName", "lastName" in firsUser);

//Q 03

let constructerName = {
    Name: "Sahar",
    email: "sahar@gmail.com",
    password: "Sahar" + 1234,
}
function Consctutor(Name, email, password) {
    this.Name = Name;
    this.email = email;
    this.password = password;
}
let inform = new Consctutor("Hamid", "hamid@gmail.com", "hamid1234")
console.log(inform);
let inform01 = new Consctutor("Saylani", "saylani@gmail.com", "saylani1234")
console.log(inform01);

//Q 04

function Educators(Name, gender, address, education, profession) {
    this.Name = Name,
        this.gender = gender,
        this.address = address,
        this.education = education,
        this.profession = profession

}
let inforMation = new Educators("A", "Male", "Karachi,Pakistan", "Bs CS", "Web Dev")
console.log(inforMation);
let inforMation01 = new Educators("S", "Female", "Karachi,Pakistan", "Bs Com", "Web Dev")
console.log(inforMation01);
let inforMation02 = new Educators("J", "Male", "Karachi,Pakistan", "ACCA", "Accountant")
console.log(inforMation02);
let allEducatorsandProfessions = [inforMation, inforMation01, inforMation02];
localStorage.setItem("All Educators Data:", JSON.stringify(allEducatorsandProfessions));
let dataOfinformation = JSON.parse(localStorage.getItem("All Educators Data:"));
console.log(dataOfinformation);
