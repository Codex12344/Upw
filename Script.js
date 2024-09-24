let questionInput = document.getElementById("question");
let submitButton = document.getElementById("submit");
let answerText = document.getElementById("answer-text");
let sourceLink = document.getElementById("source-link");
let imageUpload = document.getElementById("image-upload");
let imageSolveButton = document.getElementById("image-solve");
let imageAnswerText = document.getElementById("image-answer-text");
let calculatorInput = document.getElementById("calculator-input");
let calculatorSolveButton = document.getElementById("calculator-solve");
let calculatorAnswerText = document.getElementById("calculator-answer");

// Math engine and calculator library
const math = require('mathjs');
const calculator = require('calculator-js');

submitButton.addEventListener("click", async () => {
    let question = questionInput.value.trim();
    if (question !== "") {
        try {
            let response = await fetch(`https://api.homeworksolver.com/`)
