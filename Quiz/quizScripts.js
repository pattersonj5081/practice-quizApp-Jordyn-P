const questions = [
    {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
    },
    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
   ];  // Create an array of questions, and answers 
   let index = 0;
       //Set the index at 0 to begin for the first question (This represents the questions index in the array)
   const quizQuestion = document.getElementById("question-text");
   const answerButton1 = document.getElementById("button-1");
   const answerButton2 = document.getElementById("button-2");
   const answerButton3 = document.getElementById("button-3");
   const answerButton4 = document.getElementById("button-4");
   const quizFeedback = document.getElementById("feedback");
   const nextQButton = document.getElementById("next-question");
      //Cache buttons and elements as variables 

   //Question: questions.question
   //answers: questions.answers
   //what does it do: display the one question, and the button choices
   function displayQuestion(question, answers){
    quizQuestion.textContent = question;

    answerButton1.textContent = answers[0];
    answerButton1.disabled = false; 

    answerButton2.textContent = answers[1];
    answerButton2.disabled = false; 

    answerButton3.textContent = answers[2];
    answerButton3.disabled = false; 

    answerButton4.textContent = answers[3];
    answerButton4.disabled = false; 

    quizFeedback.textContent = "";
    nextQButton.style.display = "none";

   }

   //What is it gona do: check if the selected answer is correct 

   function handleAnswerSelection(event){
        const selectButton = event.target;
        const selectedAnswer = selectButton


      if (selectButton === questions[index].answers[questions.correct]){
            selectedAnswer.isCorrect 
             feedback.textContent = "Correct!"
      }else{
        feedback.textContent = "Wrong answer.";
      } 
        answerButton1.disabled = true;
        answerButton2.disabled = true;
        answerButton3.disabled = true;
        answerButton4.disabled = true;

        nextQButton.style.display = "block";

        


   }
   // if a button is clicked, nextquestion button is availble and when clicked shold navigate to
   //next quesrion with displayQuestion()
   function nextQuestion() {
    index++;                    // iterates to the next question
   if (index < questions.length){ // Are there more questions to display or not?
     const nextQ = questions[index] //represents the next question if it exists
     displayQuestion(nextQ.question, nextQ.answers) // if it does exist, display it 
   }else{
     quizQuestion.textContent = "Quiz Complete!" // if not, let the user know that the quiz is over. 
     feedback.textContent= ""                    //no more answers so no feedback needed 
     nextQButton.style.display = "none"          //no more questions so hide next question button 
   }
}



   answerButton1.addEventListener("click", handleAnswerSelection);
   answerButton2.addEventListener("click", handleAnswerSelection);
   answerButton3.addEventListener("click", handleAnswerSelection);
   answerButton4.addEventListener("click", handleAnswerSelection);

   nextQButton.addEventListener("click", nextQuestion);

   //add arguments
  const currentQuestion = questions[index]; // represents argument for current question. Index set at 0 on line 13 to initialize 

   //displayQuestion(-- add arguments here);

   displayQuestion(currentQuestion.question,currentQuestion.answers) // display the current question and the current questions answers 




   