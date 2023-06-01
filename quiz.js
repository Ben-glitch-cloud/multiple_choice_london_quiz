// main file for Multiple Choice Quiz funations 

// file of questions 


let indexAnswer = 0

let selectedQuestion 

let userAnswersArray = []

let storedAnswersAndQuestions = [{index: 1, questionFireOfLondon: "What year did the greate fire of London start?", arrayOfAnswers: ["1567", "1665", "1666", "1731"], AnswerIndex: 2}, 
{index: 2, questionFireOfLondon: "How many rivers run through london", arrayOfAnswers: ["10", "26", "32", "56"], AnswerIndex: 1}, 
{index: 3,questionFireOfLondon: "Which of Londons public museums is the oldest?", arrayOfAnswers: ["The British Museum", "Vicroria and Albert Museum", "Natural Histoty Museum", "Sir John Soane's Museum"], AnswerIndex: 0}, 
{index: 4, questionFireOfLondon: "London has the oldest underground railway, also knowen as the Tube. But what was the first tube Line?", arrayOfAnswers: ["District line", "Metroplitan Line", "Central Line", "Victoria Line"], AnswerIndex: 1}, 
{index: 5, questionFireOfLondon: "How many times has London held the Olympics?", arrayOfAnswers: ["1", "2", "3", "4"], AnswerIndex: 2}, 
{index: 6,questionFireOfLondon: "St. Paul's Cathedral is the most important in London, when was it built?", arrayOfAnswers: ["1645", "1697", "1701", "1777"], AnswerIndex: 1}, 
{index: 7, questionFireOfLondon: "The Thames Barrier was completed in the 1980s, but for what purpose?", arrayOfAnswers: ["To protect the city from Tidal Floods", "To Supply freshwater to Londoners", "To stop big boats from heading up the river", "To reduce the speed of the river flow"], AnswerIndex: 0}, 
{index: 8, questionFireOfLondon: "Until the 1980s, Fish and Chips were served in?", arrayOfAnswers: ["boxes", "newspaper", "hats", "cups"], AnswerIndex: 1}, 
{index: 9, questionFireOfLondon: "How many Tube stations are are there in operation?", arrayOfAnswers: ["60", "135", "272", "370"], AnswerIndex: 2}, 
{index: 10, questionFireOfLondon: "London has a lot of trees, so many infact that the United Nations has classified London as an forest. Do you know how many trees are in London?", arrayOfAnswers: ["1 million", "2 million", "4 million", "8 million"], AnswerIndex: 2}, 
{index: 11, questionFireOfLondon: "When Hitler invaded Europe, several displaced governments moved to London, which where they?", arrayOfAnswers: ["Poland, Norway, France and Holland", "Poland, Norway, Belgium, France and Holland", "Poland, Norway, Spain, Belgium, France and Holland", "Poland, Denmark, Italy, France and Holland"], AnswerIndex: 1}, 
{index: 12, questionFireOfLondon: "When did the Romans found London or Londinium?", arrayOfAnswers: ["10 BC", "47 AD", "120 AD", "320 AD"], AnswerIndex: 1}]


// access main question area
let MainQuizForm = document.getElementById('mainQuizForm')
let getQuestionsBox = document.getElementById("questionBox")
let form = document.getElementById('mainQuizForm')
let startQuizBtn = document.getElementById('startQuizBtn')


// first funaction
function displayQuestionText(question="no question found", index){
    let newQuestion = document.createElement("p")
    newQuestion.setAttribute('class', 'question')
    newQuestion.innerHTML = question[index]['questionFireOfLondon']
    getQuestionsBox.appendChild(newQuestion)
}

function displayQuestionNumber(AnswersList, index){
    let indexQuestionPlace = document.createElement("p")
    indexQuestionPlace.innerText = `Question ${AnswersList[index]['index']}`
    getQuestionsBox.appendChild(indexQuestionPlace)
}


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

    // <button type="submit" form="mainQuizForm" id="nextQuestionBtn">Next Question</button> 
    let submitAnswerBtn = document.createElement('button')
    submitAnswerBtn.setAttribute('form', 'mainQuizForm')
    submitAnswerBtn.setAttribute('type', 'submit')
    submitAnswerBtn.setAttribute('id', 'nextQuestionBtn')
    submitAnswerBtn.textContent = 'Next Question'
    MainQuizForm.appendChild(submitAnswerBtn)

}


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
    console.log(selectedQuestion, 'pushed saved value')
    userAnswersArray.push(selectedQuestion)
    selectedQuestion = null
    nextQuestion()
    
}

function handleClick(event){
    selectedQuestion = Number(event.target.value)
}


function showResults(AnswersList, QandAList){
    let showUserQuizResults = document.createElement("div")
    let userScore = document.createElement("p")

    showUserQuizResults.setAttribute("id", "userQuizResults")
    userScore.setAttribute("id", "userScore")

    let overAllScore = 0

    for(let i = 0; i < QandAList.length; i++){
        if(QandAList[i]['AnswerIndex'] === AnswersList[i]){overAllScore++}
    }

    userScore.textContent = `${overAllScore} / 12`
    showUserQuizResults.appendChild(userScore)
    document.body.appendChild(showUserQuizResults)
}


function nextQuestion(){ 
    // chnage the 11 to value of the array of questions 
        if(indexAnswer < 11){
            deleteOldQuestions()
            indexAnswer++
            displayQuestionNumber(storedAnswersAndQuestions, indexAnswer)
            displayQuestionText(storedAnswersAndQuestions, indexAnswer)
            displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)
        } else {
            console.log(userAnswersArray.length, userAnswersArray, 'array')
            deleteOldQuestions()
            showResults(userAnswersArray, storedAnswersAndQuestions)
            nextQuestionBtn.style.display = 'none'
        }
  
}


function startQuiz(){
    startQuizBtn.style.display = 'none'
    displayQuestionNumber(storedAnswersAndQuestions, indexAnswer)
    displayQuestionText(storedAnswersAndQuestions, indexAnswer)
    displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)
}

// somthing is wrong county the user anwsers to the. 
