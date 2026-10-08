let students = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Ayesha", marks: 60 }
];

let list = document.getElementById("studentList");

function showAll() {
    list.innerHTML = "";

    students.forEach(function(student) {
        let li = document.createElement("li");
        li.innerText = student.name + " - " + student.marks;
        list.appendChild(li);
    });
}

function showPassed() {
    list.innerHTML = "";

    let passedStudents = students.filter(function(student) {
        return student.marks >= 50;
    });

    passedStudents.forEach(function(student) {
        let li = document.createElement("li");
        li.innerText = student.name + " - Passed";
        list.appendChild(li);
    });
}

function findStudent() {
    list.innerHTML = "";

    let input = document.getElementById("searchInput").value;

    let student = students.find(function(s) {
        return s.name.toLowerCase() === input.toLowerCase();
    });

    if (student) {
        list.innerHTML = "<li>" + student.name + " mila, marks: " + student.marks + "</li>";
    } else {
        list.innerHTML = "<li>Student nahi mila</li>";
    }
}
let names = students.map(function(student) {
    return student.name;
});

console.log("Student Names:", names);
