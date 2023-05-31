// main file for Multiple Choice Quiz funations 

// file of questions 


let indexAnswer = 0

let selectedQuestion 

let storedAnswersAndQuestions = [{index: 1, questionFireOfLondon: "What year did the greate fire of London start?", arrayOfAnswers: ["1567", "1665", "1666", "1731"]}, {index: 2, questionFireOfLondon: "How many rivers run through london", arrayOfAnswers: ["10", "26", "32", "56"]}, {index: 3,questionFireOfLondon: "Which of Londons public museums is the oldest?", arrayOfAnswers: ["The British Museum", "Vicroria and Albert Museum", "Natural Histoty Museum", "Sir John Soane's Museum"]}, {index: 4, questionFireOfLondon: "London has the oldest underground railway, also knowen as the Tube. But what was the first tube Line?", arrayOfAnswers: ["District line", "Metroplitan Line", "Central Line", "Victoria Line"]}, {index: 5, questionFireOfLondon: "How many times has London held the Olympics?", arrayOfAnswers: ["1", "2", "3", "4"]}, {index: 6,questionFireOfLondon: "St. Paul's Cathedral is the most important in London, when was it built?", arrayOfAnswers: ["1645", "1697", "1701", "1777"]}, {index: 7, questionFireOfLondon: "The Thames Barrier was completed in the 1980s, but for what purpose?", arrayOfAnswers: ["To protect the city from Tidal Floods", "To Supply freshwater to Londoners", "To stop big boats from heading up the river", "To reduce the speed of the river flow"]}, {index: 8, questionFireOfLondon: "Until the 1980s, Fish and Chips were served in?", arrayOfAnswers: ["boxes", "newspaper", "hats", "cups"]}, {index: 9, questionFireOfLondon: "How many Tube stations are are there in operation?", arrayOfAnswers: ["60", "135", "272", "370"]}, {index: 10, questionFireOfLondon: "London has a lot of trees, so many infact that the United Nations has classified London as an forest. Do you know how many trees are in London?", arrayOfAnswers: ["1 million", "2 million", "4 million", "8 million"]}, {index: 11, questionFireOfLondon: "When Hitler invaded Europe, several displaced governments moved to London, which where they?", arrayOfAnswers: ["Poland, Norway, France and Holland", "Poland, Norway, Belgium, France and Holland", "Poland, Norway, Spain, Belgium, France and Holland", "Poland, Denmark, Italy, France and Holland"]}, {index: 12, questionFireOfLondon: "When did the Romans found London or Londinium?", arrayOfAnswers: ["10 BC", "47 AD", "120 AD", "320 AD"]}]


// access main question area
let MainQuizForm = document.getElementById('mainQuizForm')
let getQuestionsBox = document.getElementById("questionBox")
let form = document.getElementById('mainQuizForm')

// first funaction
function displayQuestion(question="no question found", index){
   
    let newQuestion = document.createElement("p")
    newQuestion.setAttribute('class', 'question')
    newQuestion.innerHTML = question[index]['questionFireOfLondon']
    getQuestionsBox.appendChild(newQuestion)
}

displayQuestion(storedAnswersAndQuestions, indexAnswer)

// loop through all potenal answers

function displayAnswersToQuestions(AnswersList, index){
    for(let i = 0; i < AnswersList[index]['arrayOfAnswers'].length; i++){

        let newQuestionDiv = document.createElement("div") 
        let newInput = document.createElement("input")
        let newLabel = document.createElement('label')

        newQuestionDiv.setAttribute("class", "AnswerOpation")
        newInput.setAttribute("value", i)
        newInput.setAttribute("type", "radio")
        newInput.setAttribute("name", "answer")
        newInput.setAttribute("onclick", 'handleClick(event)')
        

        newLabel.innerHTML = AnswersList[index]['arrayOfAnswers'][i]

        newQuestionDiv.appendChild(newInput)
        newQuestionDiv.appendChild(newLabel)

        MainQuizForm.appendChild(newQuestionDiv)
    }
}

displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)

// deletes all child elements in the MainQuiz div
function deleteOldQuestions(){

    while(MainQuizForm.lastElementChild){
        MainQuizForm.removeChild(MainQuizForm.lastElementChild)
    }

    while(getQuestionsBox.lastElementChild){
        getQuestionsBox.removeChild(getQuestionsBox.lastElementChild)
    }

}

function getUserAnwser(event){
    event.preventDefault();
    // the value from question will be added to the array
    console.log(selectedQuestion, 'this will be saved')
}

function handleClick(event){
    // save value to array one submited
    console.log(event.target.value, 'value')
    selectedQuestion = Number(event.target.value)
}


function nextQuestion(){
    deleteOldQuestions()
    indexAnswer++
    displayQuestion(storedAnswersAndQuestions, indexAnswer)
    displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)
}

