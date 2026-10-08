let myQuestions = [
    {
        q: "HTML stands for?",
        o: ["Hyper Text Markup Language", "Higher Text Markup", "Hyper Text Makeup", "None"],
        a: 0
    },
    {
        q: "CSS is used for?",
        o: ["Styling", "Cooking", "Coding", "Nothing"],
        a: 0
    },
    {
        q: "JavaScript is?",
        o: ["Language", "Game", "Software", "None"],
        a: 0
    },
    {
        q: "Array index starts from?",
        o: ["0", "2", "5", "1"],
        a: 0
    },
    {
        q: "DOM stands for?",
        o: ["Document Object Model", "Data Object Main", "Desktop Or Mobile", "None"],
        a: 0
    }
];

let qNum = 0;
let myMarks = 0;

let question = document.getElementById("question");
let message = document.getElementById("message");
let myScore = document.getElementById("myScore");

let opton1 = document.getElementById("opton1");
let opton2 = document.getElementById("opton2");
let opton3 = document.getElementById("opton3");
let opton4 = document.getElementById("opton4");

showQues();

function showQues() {
    let data = myQuestions[qNum];

    question.innerHTML = data.q;

    opton1.innerHTML = data.o[0];
    opton2.innerHTML = data.o[1];
    opton3.innerHTML = data.o[2];
    opton4.innerHTML = data.o[3];

    message.innerHTML = "";
}

function checkAns(userOption) {
    let right = myQuestions[qNum].a;

    if (userOption === right) {
        myMarks++;
    }

}

function nextQuestion() {
    qNum++;

    if (qNum < myQuestions.length) {
        showQues();
    } else {
        question.innerHTML = "Quiz Completed!";
        message.innerHTML = "Your Final Score is: " + myMarks;
        document.getElementById("opton1").style.display = "none";
        document.getElementById("opton2").style.display = "none";
        document.getElementById("opton3").style.display = "none";
        document.getElementById("opton4").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
    }
}