var quizdata = [

    {
        question: "Which framework is related to JS",
        a: ".net",
        b: "flask",
        c: "react",
        d: "django",
        correct: "c"
    },
    {
        question: "Which is not a programming language",
        a: "html",
        b: "python",
        c: "java",
        d: "javascript",
        correct: "a"
    },
    {
        question: "Which is not a framework",
        a: "react",
        b: "javascript",
        c: "angular",
        d: "django",
        correct: "b"
    },
    {
        question: "Which keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both 1 and 2",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Assembly-language",
        c: "Object-Based",
        d: "Procedural",
        correct: "a"
    }

]

var quiz = document.getElementById('quizdiv')
var answer = document.querySelectorAll(".answer")
var question = document.getElementById("question")
var op_a = document.getElementById("avalue")
var op_b = document.getElementById("bvalue")
var op_c = document.getElementById("cvalue")
var op_d = document.getElementById("dvalue")
var submit = document.getElementById("submit")

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz(){
    deselect()

    question.innerHTML = quizdata[currentQuestion].question
    op_a.innerHTML = quizdata[currentQuestion].a
    op_b.innerHTML = quizdata[currentQuestion].b
    op_c.innerHTML = quizdata[currentQuestion].c
    op_d.innerHTML = quizdata[currentQuestion].d
}

function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submit.addEventListener('click', ()=>{
    var selectedOption;

    answer.forEach(answer=>{
        if(answer.checked){
            selectedOption = answer.id
        }
    })

    if(selectedOption==quizdata[currentQuestion].correct){
        quizScore += 1
    }
    currentQuestion += 1
    
    if(currentQuestion==quizdata.length){
        document.getElementById("quizdiv").innerHTML=`<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})