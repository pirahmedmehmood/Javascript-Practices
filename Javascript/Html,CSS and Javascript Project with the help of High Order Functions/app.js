let students = [
    {name: "Ali", age: 20},
    {name: "Sara", age: 22},
    {name: "Ahmed", age: 19},
    {name: "Fatima", age: 21}
];
let namesOnly = students.map(function(item){
    return item.name;
});
let older = students.filter(function(stu){
    return stu.age > 20;
});
students.forEach(function(s){
    console.log("Student: " + s.name);
});
function searchStudent(){
    let box = document.getElementById("searchBox").value;
     let output = document.getElementById("output");
    let found = students.find(function(st){
       return st.name.toLowerCase() === box.toLowerCase();
    });
    if(found){
   output.innerHTML = "Result: " + found.name;
} else {
   output.innerHTML = "Student nahi mila";
}

    console.log(older);
}