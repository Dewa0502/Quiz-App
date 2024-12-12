document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    let questionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris","London","Berlin","Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet",
            choices: ["Mars","Venus","Jupiter","Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer:"William Shakespeare",
        },
    ];

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener("click", () => {
        questionIndex++;
        if(questionIndex < questions.length){
            showQuestion();
        }else{
            showResult();
        }
    });

    restartBtn.addEventListener("click", () => {
        questionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    };

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[questionIndex].question;
        choicesList.innerHTML = ""; //clear previous choices
        questions[questionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    };

    function selectAnswer(choice){
        const correctAnswer = questions[questionIndex].answer;
        if (choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden");
    }

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

});

// adding a comment for practising git