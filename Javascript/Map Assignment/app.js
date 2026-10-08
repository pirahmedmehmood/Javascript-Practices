let students=new Map()
console.log("Adding key and value in Map ==>");

students.set("Admin",10)
students.set("Admin2",11)
students.set("Admin3",12)
console.log(students);
console.log("Cheking  the values");
console.log(students.has("Admin"));
console.log(students.has("admin2"));
console.log("Adding function in map");
let fun=() => {}
students.set(fun,"function")
console.log(students);
students.set =({
    skills: new Set(["JavaScript", "HTML"])
    })
console.log(students);
console.log("Deleting the values");
students.delete(fun)
console.log(students);
console.log("Getting the values");
console.log(students.get("Admin2"));

console.log("Clearing the values");
students.clear()
console.log(students);
console.log("Key  values");
console.log(students.keys());
console.log("Size the values");
console.log(students.size);
console.log("Set Data");

let rollNum=new Set([5,15,25,35,45,55,65,75,85,95,95,95] )
console.log(rollNum);
console.log("Adding Values");
console.log(rollNum.add(105));
console.log("Cheking  Value");
console.log(rollNum.has(95));
console.log(rollNum.has(96));
console.log("Size of the Values");
console.log(rollNum.size);
console.log("Deleting Values");
console.log(rollNum.delete(15));
console.log(rollNum.size);













